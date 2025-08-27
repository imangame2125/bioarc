import type { FC } from 'react';

interface AvatarProps {
  img: string;
  isLogin?: boolean;
  size?: number;
  onClick?: () => void;
}
const Avatar: FC<AvatarProps> = ({ img, isLogin = false, size = 40, onClick }) => {
  return (
    <div className="relative inline-block" style={{ height: size }}>
      <img
        onClick={onClick}
        className="rounded-full border-6 border-white object-cover cursor-pointer "
        src={img}
        alt="avatar"
      />
      {isLogin && (
        <span className="absolute bg-header-success rounded-full right-0 w-2 h-2 top-4 left-11 border border-white" />
      )}
    </div>
  );
};

export default Avatar;
