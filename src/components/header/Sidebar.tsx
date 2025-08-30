import { ListItemIcon, MenuItem, MenuList, Typography } from "@mui/material";
import clsx from "clsx";
import type { Icon } from "iconsax-react";
import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
interface Props {
  items: {
    name: string;
    icon: Icon;
    path?: string;
    onClick?: () => void;
  }[];
}

const Sidebar: FC<Props> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item: Props["items"][number]) => {
    if (item.path) navigate(item.path);
    item.onClick?.();
  };

  return (
    <MenuList
      sx={{ borderLeft: "1px solid silver" }}
      className="min-w-[240px] hidden lg:block"
    >
      <Typography variant="subtitle2" sx={{ px: 2, py: 1 }}>
        منوی اصلی
      </Typography>

      {items.map((item) => {
        const isActive = item.path === location.pathname;
        const Icon = item.icon;
        return (
          <MenuItem
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200",
              isActive ? "text-blue-600 " : "text-gray-800 hover:bg-gray-100",
            )}
            component="li"
            key={item.name}
            onClick={() => handleClick(item)}
          >
            <ListItemIcon>
              <Icon size="24" color={isActive ? "#1976d2" : "#424242"} />
            </ListItemIcon>
            <Typography variant="inherit">{item.name}</Typography>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default Sidebar;
