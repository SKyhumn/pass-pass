export type ScheduleItemCardProps = {
  title: string;
  date: string;
  time: string;
  description?: string;
  completed?: boolean;
  onToggleComplete?: () => void;
  onDelete?: () => void;
};