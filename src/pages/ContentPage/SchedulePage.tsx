import { useEffect, useState } from "react";
import { auth, db } from "../../FirebaseSDK";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import type { User } from "firebase/auth";
import type { ScheduleItem } from "../../types/ScheduleItem";

import ScheduleSummaryCards from "../../components/Schedule/ScheduleSummaryCards";
import AddScheduleButton from "../../components/Schedule/AddScheduleBtn";
import ScheduleEmptyView from "../../components/Schedule/ScheduleEmptyView";
import AddScheduleForm from "../../components/Schedule/AddScheduleForm";
import ScheduleItemCard from "../../components/Schedule/ScheduleItemCard";
import ScheduleSection from "../../components/Schedule/ScheduleSection";
import Modal from "../../components/Modals/Modal";

export default function SchedulePage() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resetForm = () => {
    setTitle("");
    setDate("");
    setTime("");
    setDescription("");
  };

  useEffect(() => {
    let unsubscribeSnapshot: (() => void) | undefined;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (!user) {
        setSchedules([]);
        setAuthLoading(false);
        return;
      }

      const q = query(
        collection(db, "users", user.uid, "schedules"),
        orderBy("createdAt", "desc")
      );

      unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
        const data: ScheduleItem[] = snapshot.docs.map((item) => ({
          id: item.id,
          ...(item.data() as Omit<ScheduleItem, "id">),
        }));

        setSchedules(data);
        setAuthLoading(false);
      });
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeSnapshot) unsubscribeSnapshot();
    };
  }, []);

  const handleAddSchedule = async () => {
    if (!user) return;
    if (!title.trim() || !date.trim() || !time.trim()) return;

    try {
      setLoading(true);

      await addDoc(collection(db, "users", user.uid, "schedules"), {
        title: title.trim(),
        date,
        time,
        description: description.trim(),
        completed: false,
        createdAt: serverTimestamp(),
      });

      resetForm();
      setShowForm(false);
    } catch (error) {
      setErrorMessage("일정 추가 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSchedule = async (scheduleId: string) => {
    if (!user) return;

    try {
      await deleteDoc(doc(db, "users", user.uid, "schedules", scheduleId));
    } catch (error) {
      setErrorMessage("일정 삭제 중 오류가 발생했습니다.");
    }
  };

  const handleToggleComplete = async (
    scheduleId: string,
    currentValue: boolean
  ) => {
    if (!user) return;

    try {
      await updateDoc(doc(db, "users", user.uid, "schedules", scheduleId), {
        completed: !currentValue,
      });
    } catch (error) {
      setErrorMessage("일정 완료 처리 중 오류가 발생했습니다.");
    }
  };

  const inProgressSchedules = schedules.filter((item) => !item.completed);
  const completedSchedules = schedules.filter((item) => item.completed);

  // ✅ 1. 인증 로딩 상태
  if (authLoading) {
    return (
      <div className="p-6 text-center text-slate-500">
        🔄 일정 불러오는 중...
      </div>
    );
  }

  // ✅ 2. 비로그인 상태
  if (!user) {
    return (
      <div className="p-6 text-center text-slate-500">
        로그인 후 이용해주세요.
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      <ScheduleSummaryCards
        inProgressCount={inProgressSchedules.length}
        completedCount={completedSchedules.length}
      />

      <AddScheduleButton onClick={() => setShowForm(true)} />

      {showForm && (
        <AddScheduleForm
          title={title}
          date={date}
          time={time}
          description={description}
          onChangeTitle={setTitle}
          onChangeDate={setDate}
          onChangeTime={setTime}
          onChangeDescription={setDescription}
          onAdd={handleAddSchedule}
          onCancel={() => {
            resetForm();
            setShowForm(false);
          }}
          loading={loading}
        />
      )}

      {/* ✅ 3. 데이터 없음 */}
      {schedules.length === 0 ? (
        <ScheduleEmptyView />
      ) : (
        <div className="space-y-8">
          <ScheduleSection title="진행 중인 일정">
            {inProgressSchedules.length === 0 ? (
              <p className="text-slate-400">진행 중인 일정이 없습니다.</p>
            ) : (
              inProgressSchedules.map((item) => (
                <ScheduleItemCard
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  time={item.time}
                  description={item.description}
                  completed={item.completed}
                  onToggleComplete={() =>
                    handleToggleComplete(item.id, item.completed)
                  }
                  onDelete={() => handleDeleteSchedule(item.id)}
                />
              ))
            )}
          </ScheduleSection>

          <ScheduleSection title="완료된 일정">
            {completedSchedules.length === 0 ? (
              <p className="text-slate-400">완료된 일정이 없습니다.</p>
            ) : (
              completedSchedules.map((item) => (
                <ScheduleItemCard
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  time={item.time}
                  description={item.description}
                  completed={item.completed}
                  onToggleComplete={() =>
                    handleToggleComplete(item.id, item.completed)
                  }
                  onDelete={() => handleDeleteSchedule(item.id)}
                />
              ))
            )}
          </ScheduleSection>
        </div>
      )}

      {errorMessage && (
        <Modal
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </div>
  );
}