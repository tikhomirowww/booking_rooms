export interface IModal {
  title: string;
  children: React.ReactNode;
  button: string;
  error?: string;
  onClose: () => void;
  isOpen: boolean;
  onClick: () => void;
}
