export type DateCardProps = {
  data: {
    id: number;
    icon: string;
    timestamp: number;
    temperature: number;
  };
  currentCardId: number;
  handlerCardClick: (id: number) => void;
}
