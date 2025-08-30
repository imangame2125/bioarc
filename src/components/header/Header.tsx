import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { HambergerMenu } from "iconsax-react";
import { useState } from "react";
import avatar from "../../assets/images/avatar.svg";
import Logo from "../../assets/images/logo.svg";
import Avatar from "./Avatar";
import ClinicSettings from "./ClinicSettings";
import DrawerMenu from "./Drawer";
import MainMenu from "./MainMenu";
import Notifications from "./Notifications";
const leftMenuItems = [
  { name: "پنل من" },
  { name: "بیماران من" },
  { name: "درمان" },
  { name: "مالی" },
  { name: "مدیریت" },
];

const HambergerMenuItems = [
  { name: "تماس خروجی" },
  { name: "تاریخچه تماس ها" },
  { name: "کارمندان" },
];

const Header = () => {
  const [leftSideOpen, setLeftSideOpen] = useState<boolean>(false);
  const [rightSideOpen, setRIghtSideOpen] = useState<boolean>(false);

  return (
    <header>
      <Box className="">
        <AppBar className="">
          <Toolbar className="flex flex-row-reverse justify-between items-center py-2.5 px-2">
            <Avatar img={avatar} isLogin={true} />
            <Box className="hidden sm:block cursor-pointer">
              <ClinicSettings
                selectedDepartment="روماتولوژی"
                selectedClinic="بیمارستان شریعتی"
                selectedDoctor="محمود اکبریان"
              />
            </Box>
            <Notifications notificationCount={3} />
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ marginLeft: "auto" }}
            >
              <HambergerMenu
                onClick={() => setRIghtSideOpen(true)}
                className="sm:hidden"
                size="24"
                color="#FFFFFF"
              />
            </IconButton>
            <img
              className="hidden md:hidden lg:block cursor-pointer"
              src={Logo}
              alt="logo"
            />
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
