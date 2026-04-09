export default function TodayTaskCard() {
  return (
    <div className="opacity-0 bg-white rounded-xl p-5 shadow-sm animate-fadein" style={{ animationDelay: "0.3s" }}>
      <h2 className="font-semibold mb-3">오늘 할 일</h2>

      <ul className="text-sm text-gray-600 space-y-1">
        <li>• NCS 문제 20개 풀기</li>
        <li>• 자격증 강의 1개 듣기</li>
        <li>• 자소서 1문항 작성</li>
      </ul>
    </div>
  );
}