import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { FC } from 'react';

interface Props {
  items: { name: string }[];
}

const MainMenu: FC<Props> = ({ items }) => {
  return (
    <Box className="border-b border-gray-200 py-2 hidden sm:flex">
      <Select value="سرویس‌ها" className="ml-12" size="small">
        <MenuItem value="سرویس‌ها">سرویس‌ها</MenuItem>
      </Select>
      <Box className="flex gap-x-4 py-2" component={'ul'}>
        {items.map((item) => (
          <Box component={'li'} key={item.name}>
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MainMenu;
