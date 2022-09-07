// navbar types
export interface INavBar {
  src: any;
  icon?: any;
  alt: string;
  caption?: string;
}

// main types
export interface IMain {
  children: React.ReactNode
}
export interface TabProps {
  text: string;
  styles?: string;
  onClick: () => void;
}
export interface TabItemProps {
  text: string;
  src?: string
}