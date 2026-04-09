import emptyCalendarIcon from "../../assets/schedule/empty-calendar.png";

export default function ScheduleEmptyView() {
  return (
    <div className="opacity-0 flex flex-col items-center justify-center pt-20 md:pt-28 text-center animate-fadein" style={{ animationDelay: "0.2s" }}>
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/60 flex items-center justify-center mb-6">
        <img
          src={emptyCalendarIcon}
          alt="빈 일정"
          className="w-11 h-11 md:w-12 md:h-12 object-contain opacity-40"
        />
      </div>

      <p className="text-2xl md:text-3xl font-medium text-slate-500">
        등록된 일정이 없습니다
      </p>
      <p className="mt-3 text-lg text-slate-400">
        새 일정을 추가해보세요!
      </p>
    </div>
  );
}