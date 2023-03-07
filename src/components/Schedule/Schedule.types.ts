export default interface ISchedule {
  state: string;
  //   setOpenFunc: (pre: boolean) => boolean;
  setOpenFunc: any;
  isOpen: boolean;
  sideBar: boolean;
  closeSideBar: () => void;
}

export type MeetingType = {
  date: string;
  title: string;
  id: number;
  ten: null | number;
  eleven: null | number;
  twelve: null | number;
  one: null | number;
  two: null | number;
  three: null | number;
  four: null | number;
  five: null | number;
  six: null | number;
  seven: null | number;
  eight: null | number;
  nine: null | number;
  month: null | number;
};

export type StudioType = {
  date: string;
  title: string;
  id: number;
  ten: null | number;
  eleven: null | number;
  twelve: null | number;
  one: null | number;
  two: null | number;
  three: null | number;
  four: null | number;
  five: null | number;
  six: null | number;
  seven: null | number;
  eight: null | number;
  nine: null | number;
  month: null | number;
};

export type ProductionType = {
  date: string;
  title: string;
  id: number;
  ten: null | number;
  eleven: null | number;
  twelve: null | number;
  one: null | number;
  two: null | number;
  three: null | number;
  four: null | number;
  five: null | number;
  six: null | number;
  seven: null | number;
  eight: null | number;
  nine: null | number;
  month: null | number;
};
