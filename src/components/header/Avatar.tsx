import { Box } from "@mui/material";
import type { FC } from "react";

interface AvatarProps {
  img: string;
  isLogin?: boolean;
  onClick?: () => void;
}
const Avatar: FC<AvatarProps> = ({ img, isLogin = false, onClick }) => {
  return (
    <Box className="relative inline-block md:mr-12 cursor-pointer">
      <img
        onClick={onClick}
        className="rounded-full border-6 border-white object-cover cursor-pointer "
        src={img}
        alt="avatar"
      />
      {isLogin && (
        <span className="absolute  bg-green-500 rounded-full right-0 w-2 h-2 top-4 left-11 border border-white" />
      )}
    </Box>
  );
};

export default Avatar;
