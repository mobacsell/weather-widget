export interface DateCardProps {
  cardId: number;
  icon: string;
  timestamp: number;
  temperature: number;
  onCurrentCardClick: (id: number) => void;
}
