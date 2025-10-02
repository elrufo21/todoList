export type NavItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  submenu?: NavItem[];
};
