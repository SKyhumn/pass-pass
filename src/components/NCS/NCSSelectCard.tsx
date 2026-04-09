import type { ReactNode } from "react";

type NCSSelectCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  extraText?: string;
  onClick: () => void;
  animationDelay?: string;
};

export default function NCSSelectCard({
  icon,
  title,
  description,
  items,
  extraText,
  onClick,
  animationDelay = "0s",
}: NCSSelectCardProps) {
  return (
    <article
    className="opacity-0 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm animate-fadein"
    style={{ animationDelay }}
    >
        <div className="flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#78C5FF] text-white">
                {icon}
            </div>

            <h2 className="mt-5 text-xl md:text-2xl font-bold text-slate-900">
                {title}
            </h2>

            <p className="mt-1 text-sm md:text-base text-slate-500">
                {description}
            </p>
        </div>

        <div className="mt-6 space-y-2 text-sm text-slate-700">
            {items.map((item) => (
                <p key={item}>• {item}</p>
            ))}

            {extraText && (
                <p className="pt-1 text-xs text-slate-400">{extraText}</p>
            )}
        </div>

        <button
            onClick={onClick}
            className="mt-6 w-full rounded-xl bg-[#78C5FF] py-2 text-sm font-semibold text-white transition hover:bg-[#67aadd]"
        >
            시작하기
        </button>

    </article>
  );
}