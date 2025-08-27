import Box from '@mui/material/Box';
import { ArrangeHorizontalSquare, MessageAdd1, Notification } from 'iconsax-react';
import type { FC } from 'react';

interface NotificationsProps {
  notificationCount?: number;
}

const Notifications: FC<NotificationsProps> = ({ notificationCount = 0 }) => {
  return (
    <Box className="flex items-center gap-2 border rounded px-4 justify-center py-2 gap-x-4 border-border-header">
      <Notification className="cursor-pointer" size="18" color="#D9E1F6" />
      <ArrangeHorizontalSquare size="18" color="#D9E1F6" />
      <Box className="relative">
        <MessageAdd1 size="18" color="#D9E1F6" />
        {notificationCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500  text-white text-xs w-3 h-3 rounded-full flex items-center justify-center">
            {notificationCount}
          </span>
        )}
      </Box>
    </Box>
  );
};

export default Notifications;
