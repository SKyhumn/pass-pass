export default function ProgressCard() {
  return (
    <div className="opacity-0 bg-white rounded-xl p-5 shadow-sm animate-fadein" style={{ animationDelay: "0.1s" }}>
      <h2 className="font-semibold mb-3">학습 진행도</h2>

      <div className="space-y-3">
        <div>
          <p className="text-sm mb-1">NCS</p>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-sky-400 h-2 rounded w-[60%]"></div>
          </div>
        </div>

        <div>
          <p className="text-sm mb-1">자격증</p>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-sky-400 h-2 rounded w-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}