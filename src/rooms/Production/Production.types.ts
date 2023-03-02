export interface IProduction {
  set: (s: string) => void;
  state?: string;
  openSchedule: () => void;
  closeSchedule: () => void;
}
