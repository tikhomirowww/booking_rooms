export default interface IStudio {
  set: (s: string) => void;
  state?: string;
  openSchedule: () => void;
  closeSchedule: () => void;
}
