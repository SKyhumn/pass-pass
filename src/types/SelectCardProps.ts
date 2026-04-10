import type { ReactNode } from "react";

export type SelectCardProps = {
  icon: ReactNode;
  title: string;
  description?: string;
  items: string[];
  extraText?: string;
  onClick: () => void;
  animationDelay?: string;
};
