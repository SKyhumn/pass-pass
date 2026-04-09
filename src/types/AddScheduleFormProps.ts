export type AddScheduleFormProps = {
  title: string;
  date: string;
  time: string;
  description: string;
  onChangeTitle: (value: string) => void;
  onChangeDate: (value: string) => void;
  onChangeTime: (value: string) => void;
  onChangeDescription: (value: string) => void;
  onAdd?: () => void;
  onCancel?: () => void;
  loading?: boolean;
};