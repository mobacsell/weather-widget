export interface TabProps {
  data: {
    id: number;
    day: number;
  };
  currentTabId: number;
  handlerTabClick: (id: number) => void;
}
