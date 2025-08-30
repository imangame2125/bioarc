import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import type { JSX } from "react/jsx-runtime";

interface Props {
  items: {
    name: string;
    icon: JSX.Element;
    isAvtice?: boolean;
    path?: string;
    onClick?: () => void;
  }[];
}

const Sidebar: FC<Props> = ({ items }) => {
  return (
    <MenuList
      sx={{ borderLeft: "1px solid silver" }}
      className="min-w-[240px] hidden lg:block"
    >
      <Typography variant="inherit">منوی اصلی</Typography>
      {items.map((item) => (
        <MenuItem component={"li"} key={item.name}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <Typography variant="inherit">{item.name}</Typography>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default Sidebar;
