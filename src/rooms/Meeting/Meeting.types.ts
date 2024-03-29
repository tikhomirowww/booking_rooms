export interface IMeeting {
  set: (s: string) => void;
  state?: string;
  openSchedule: () => void;
  closeSchedule: () => void;
  openSideBar: () => void;
  closeSideBar: () => void;
  turnLoader: () => void;
}
