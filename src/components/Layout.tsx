import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import CustomNavigationBottom from './CustomNavigationBottom';
import Header from './header/Header';
import Sidebar from './header/Sidebar';

const sidebarItems = [
  { name: 'Item 1', icon: <Box /> },
  { name: 'Item 2', icon: <Box /> },
  { name: 'Item 3', icon: <Box /> },
];

const Layout = () => {
  return (
    <Box className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex">
        <Sidebar items={sidebarItems} />
        <Outlet />
      </main>
      <CustomNavigationBottom />
    </Box>
  );
};

export default Layout;
