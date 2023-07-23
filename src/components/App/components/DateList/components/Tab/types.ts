export type TabProps = {
  data: {
    id: number;
    day: number;
  };
  currentTabId: number;
  handlerTabClick: (id: number) => void;
}
