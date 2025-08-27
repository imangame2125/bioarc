import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CalendarAdd, Element4, TaskSquare, UserSquare } from 'iconsax-react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

interface BottomNavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const items: BottomNavItem[] = [
  {
    name: 'داشبورد',
    icon: <Element4 size="24" color="#424242" />,
    path: '/dashboard',
  },
  {
    name: 'افزودن نوبت',
    icon: <CalendarAdd size="24" color="#424242" />,
    path: '/add-turn',
  },
  {
    name: 'بیماران',
    icon: <UserSquare size="24" color="#424242" />,
    path: '/patients',
  },

  {
    name: 'وظایف',
    icon: <TaskSquare size="24" color="#424242" />,
    path: '/tasks',
  },
];

const CustomNavigationBottom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = items.findIndex((item) =>
    location.pathname.startsWith(item.path),
  );

  const [value, setValue] = useState<number>(
    currentIndex === -1 ? 0 : currentIndex,
  );
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(items[newValue].path);
  };

  return (
    <Box sx={{ display: { md: 'none' } }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          {items.map((item) => (
            <BottomNavigationAction
              key={item.name}
              label={item.name}
              icon={item.icon}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default CustomNavigationBottom;
