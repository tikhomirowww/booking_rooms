export interface IButton {
  children: string;
  onClick?: () => void;
  className?: string;
  variant?: "filled" | "outlined";
}
