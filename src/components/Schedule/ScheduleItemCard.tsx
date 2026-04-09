import calendar from "../../assets/nav-images/calendar-selected.png";
import clock from "../../assets/schedule/clock.png";
import trashCan from "../../assets/schedule/trash-can.png";

type Props = {
  title: string;
  date: string;
  time: string;
  description?: string;
  completed?: boolean;
  onToggleComplete?: () => void;
  onDelete?: () => void;
};

export default function ScheduleItemCard({
  title,
  date,
  time,
  description,
  completed = false,
  onToggleComplete,
  onDelete,
}: Props) {
  return (
    <div className="flex items-start justify-between rounded-[24px] border-2 border-[#78C5FF] bg-white px-6 py-6 shadow-sm">
      <div className="flex gap-4">
        <button
          onClick={onToggleComplete}
          className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full border-2 transition ${
            completed
              ? "border-green-500 bg-green-500 text-white"
              : "border-[#78C5FF] bg-white"
          }`}
        >
          {completed && <span className="text-sm">✓</span>}
        </button>

        <div>
          <h3 className="text-xl font-medium text-slate-900">{title}</h3>

          <div className="mt-4 flex flex-wrap items-center gap-5 text-slate-600">
            <div className="flex items-center gap-2 text-md">
              <img src={calendar} className="w-4"/>
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-2 text-md">
              <img src={clock} className="w-4"/>
              <span>{time}</span>
            </div>
          </div>

          {description && (
            <p className="mt-5 text-xl text-slate-700">{description}</p>
          )}
        </div>
      </div>

      <button
        onClick={onDelete}
        className="ml-4 text-3xl text-slate-400 transition hover:text-red-400"
      >
        <img src={trashCan} className="w-6 cursor-pointer"/>
      </button>
    </div>
  );
}