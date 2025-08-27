import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { HambergerMenu } from 'iconsax-react';
import { useState } from 'react';
import avatar from '../../assets/images/avatar.svg';
import DrawerMenu from './Drawer';
import Notifications from './Notifications';
import ClinicSettings from './ClinicSettings';
import Avatar from './Avatar';
import MainMenu from './MainMenu';


const leftMenuItems = [
  { name: 'مدیریت' },
  { name: 'مالی' },
  { name: 'درمان' },
  { name: 'بیماران من' },
  { name: 'پنل من' },
];

const HambergerMenuItems = [
  { name: 'تماس خروجی' },
  { name: 'تاریخچه تماس ها' },
  { name: 'کارمندان' },
];

const Header = () => {
  const [leftSideOpen, setLeftSideOpen] = useState<boolean>(false);
  const [rightSideOpen, setRIghtSideOpen] = useState<boolean>(false);

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              padding: '10px 6px',
            }}
          >
            <Avatar img={avatar} isLogin={true} />

            <Box className="hidden sm:block">
              <ClinicSettings
                selectedClinic="بیمارستان شریعتی"
                selectedDepartment="روماتولوژی"
                selectedDoctor="محمود اکبریان"
              />
            </Box>
            <Notifications notificationCount={3} />
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ marginLeft: 'auto' }}
            >
              <HambergerMenu
                onClick={() => setRIghtSideOpen(true)}
                className="sm:hidden"
                size="24"
                color="#FFFFFF"
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <MainMenu items={leftMenuItems} />
      </Box>

      <Drawer
        anchor="right"
        open={leftSideOpen}
        onClose={() => setLeftSideOpen(false)}
      >
        <DrawerMenu
          items={leftMenuItems}
          onClose={() => setLeftSideOpen(false)}
        />
      </Drawer>

      <Drawer
        anchor="left"
        open={rightSideOpen}
        onClose={() => setRIghtSideOpen(false)}
      >
        <DrawerMenu
          items={HambergerMenuItems}
          onClose={() => setRIghtSideOpen(false)}
        />
      </Drawer>
    </header>
  );
};

export default Header;
