import Box from "@mui/material/Box";
import {
  CalendarAdd,
  Call,
  CallCalling,
  Element4,
  People,
  TaskSquare,
  UserSquare,
} from "iconsax-react";
import { Outlet } from "react-router-dom";
import CustomNavigationBottom from "./CustomNavigationBottom";
import Header from "./header/Header";
import Sidebar from "./header/Sidebar";

const sidebarItems = [
  {
    name: "داشبورد",
    icon: <Element4 size="24" color="#424242" />,
    isActice: true,
    path: "/dashboard",
  },
  {
    name: "تماس خروجی",
    icon: <CallCalling size="24" color="#424242" />,
    isActice: true,
    path: "/outbound-call",
  },
  {
    name: "افزودن نوبت",
    icon: <CalendarAdd size="24" color="#424242" />,
    isActice: true,
    path: "/add-appointment",
  },
  {
    name: "وظایف",
    icon: <TaskSquare size="24" color="#424242" />,
    isActice: true,
    path: "/tasks",
  },
  {
    name: "بیماران",
    icon: <People size="24" color="#424242" />,
    isActice: true,
    path: "/patients",
  },
  {
    name: "کارمندان",
    icon: <UserSquare size="24" color="#424242" />,
    isActice: true,
    path: "/staff",
  },
  {
    name: "تاریخچه تماس‌ها",
    icon: <Call size="24" color="#424242" />,
    isActice: true,
    path: "/call-history",
  },
];

const Layout = () => {
  return (
    <Box className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex h-screen">
        <Sidebar items={sidebarItems} />
        <Outlet />
      </main>
      <CustomNavigationBottom />
    </Box>
  );
};

export default Layout;
