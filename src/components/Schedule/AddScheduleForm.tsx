import type { AddScheduleFormProps } from "../../types/AddScheduleFormProps";

export default function AddScheduleForm({
  title,
  date,
  time,
  description,
  onChangeTitle,
  onChangeDate,
  onChangeTime,
  onChangeDescription,
  onAdd,
  onCancel,
  loading = false,
}: AddScheduleFormProps) {
  return (
    <div className="w-full rounded-3xl border-2 border-[#78C5FF] bg-white px-6 py-8 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">새 일정 추가</h2>

      <div className="mt-8 space-y-6">
        <div>
          <label className="mb-3 block text-lg font-medium text-slate-900">
            제목 <span className="text-slate-700">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
            placeholder="일정 제목을 입력하세요"
            disabled={loading}
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-md text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#78C5FF] disabled:bg-slate-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-3 block text-lg font-medium text-slate-900">
              날짜 <span className="text-slate-700">*</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => onChangeDate(e.target.value)}
              disabled={loading}
              className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-md text-slate-800 outline-none focus:border-[#78C5FF] disabled:bg-slate-100"
            />
          </div>

          <div>
            <label className="mb-3 block text-lg font-medium text-slate-900">
              시간 <span className="text-slate-700">*</span>
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => onChangeTime(e.target.value)}
              disabled={loading}
              className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-md text-slate-800 outline-none focus:border-[#78C5FF] disabled:bg-slate-100"
            />
          </div>
        </div>

        <div>
          <label className="mb-3 block text-lg font-medium text-slate-900">
            설명
          </label>
          <textarea
            value={description}
            onChange={(e) => onChangeDescription(e.target.value)}
            placeholder="일정에 대한 설명을 입력하세요 (선택사항)"
            disabled={loading}
            className="min-h-35 w-full resize-none rounded-2xl border border-slate-300 px-4 py-4 text-md text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#78C5FF] disabled:bg-slate-100"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <button
            onClick={onAdd}
            disabled={loading}
            className="h-14 rounded-2xl bg-[#78C5FF] text-xl font-semibold text-white transition hover:brightness-105 active:scale-[0.99] disabled:opacity-60"
          >
            {loading ? "추가 중..." : "추가"}
          </button>

          <button
            onClick={onCancel}
            disabled={loading}
            className="h-14 rounded-2xl bg-slate-200 text-xl font-semibold text-slate-800 transition hover:bg-slate-300 active:scale-[0.99] disabled:opacity-60"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}