import Box from '@mui/material/Box';
import { ArrowDown3 } from 'iconsax-react';
import type { FC, JSX } from 'react';
import Avatar from './Avatar';

interface UserInfoItem {
  name: string;
  icon?: JSX.Element;
}

interface UserInfoBoxProps {
  avatarImg: string;
  isOnline?: boolean;
  items?: UserInfoItem[];
  onClick: () => void;
}

const UserInfoBox: FC<UserInfoBoxProps> = ({
  avatarImg,
  isOnline = true,
  items,
  onClick,
}) => {
  return (
    <Box>
      <Avatar onClick={onClick} img={avatarImg} isLogin={isOnline} />
      <Box className="flex gap-1 sm:gap-0 hover:bg-gray-200 cursor-pointer">
        {items?.map((item, idx) => (
          <Box key={idx}>
            {item.icon ?? (
              <ArrowDown3 variant="Bold" size="13" color="#000000" />
            )}
            <span className="text-sm">{item.name}</span>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserInfoBox;
