import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import type { FC } from 'react';

interface DrawerItem {
  name: string;
  icon?: React.ReactNode;
}

interface DrawerMenuProps {
  onClose: () => void;
  items: DrawerItem[];
}

const DrawerMenu: FC<DrawerMenuProps> = ({ onClose, items }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'right', borderBottom: '1px solid silver' }}>
              {item.icon && <span>{item.icon}</span>}
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerMenu;
