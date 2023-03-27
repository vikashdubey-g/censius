import { ReactComponent as UserIcon } from "../assets/svg/User Icon.svg";
import { ReactComponent as InboxIcon } from "../assets/svg/Inbox Icon.svg";
import { ReactComponent as ProductIcon } from "../assets/svg/Product Icon.svg";

interface Sidebar {
  id: number;
  label: string;
  Icon: any;
}

export const sidebarConfigue: Sidebar[] = [
  {
    id: 0,
    label: "Team Members",
    Icon: UserIcon,
  },
  {
    id: 1,
    label: "Products",
    Icon: InboxIcon,
  },
  {
    id: 2,
    label: "Inbox",
    Icon: ProductIcon,
  },
];
