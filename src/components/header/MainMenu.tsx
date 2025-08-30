import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import type { FC } from "react";

interface Props {
  items: { name: string }[];
}

const MainMenu: FC<Props> = ({ items }) => {
  return (
    <Box className="border-b border-gray-200 py-2 hidden sm:flex mt-20 mr-2">
      <Select value="سرویس‌ها" className="ml-12" size="small">
        <MenuItem value="سرویس‌ها">سرویس‌ها</MenuItem>
      </Select>
      <Box className="flex gap-x-4 py-2 md:mr-9" component={"ul"}>
        {items.map((item) => (
          <Box className="md:px-3" component={"li"} key={item.name}>
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MainMenu;
