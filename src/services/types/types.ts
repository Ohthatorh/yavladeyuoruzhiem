import { ReactElement } from "react";

export interface IIconComponent {
  className?: string;
  isActive?: boolean;
  fill?: string;
  stroke?: string;
}

export interface IModalComponent {
  children: ReactElement;
  title?: string;
  isOpen?: boolean;
  onClose: () => void;
}

export type TModalCloseComponent = Omit<IModalComponent, "children" | "title">;

export type TModalOverlayComponent = Omit<
  IModalComponent,
  "children" | "title"
>;

export type TModalHeaderComponent = Omit<IModalComponent, "children">;
