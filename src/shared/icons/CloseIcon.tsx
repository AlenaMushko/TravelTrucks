import { SvgIcon, type SvgIconProps } from "@mui/material";

interface CloseIconProps extends Omit<SvgIconProps, "viewBox"> {}

const CloseIcon = ({ sx, ...props }: CloseIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 24 24"
      sx={{
        width: 24,
        height: 24,
        ...sx,
      }}
    >
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default CloseIcon;
