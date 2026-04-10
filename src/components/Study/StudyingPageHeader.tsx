import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import type { StudyingPageHeaderProps } from "../../types/StudyingPageHeaderProps";

export default function StudyingPageHeader({ title, description, showBackButton = true }: StudyingPageHeaderProps) {
  const navigate = useNavigate();

  return (
    <section className="opacity-0 space-y-2 animate-fadein">
      {/* 뒤로가기 */}
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          뒤로가기
        </button>
      )}

      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>

      {description && (
        <p className="text-md text-slate-500">{description}</p>
      )}
    </section>
  );
}