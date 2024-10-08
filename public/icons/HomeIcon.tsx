import { SVGProps } from "react";

type IconProps = SVGProps<any>;

export const HomeIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 21H14.8C14.634 21 14.5 20.866 14.5 20.7V16.5C14.5 15.119 13.381 14 12 14C10.619 14 9.5 15.119 9.5 16.5V20.7C9.5 20.866 9.36595 21 9.19995 21H6C4 21 3 20 3 18V11.651C3 9.65302 3.52305 9.34608 4.43005 8.58608L10.394 3.58498C11.323 2.80598 12.6781 2.80598 13.6071 3.58498L19.571 8.58608C20.477 9.34608 21.001 9.65302 21.001 11.651V18C21 20 20 21 18 21Z"
        fill="#FF7355"
      />
    </svg>
  );
};
