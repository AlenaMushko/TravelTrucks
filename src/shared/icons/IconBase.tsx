import { SvgIcon, type SvgIconProps } from "@mui/material";

interface IconBaseProps extends Omit<SvgIconProps, "viewBox"> {
  children: React.ReactNode;
}

const IconBase = ({ children, ...props }: IconBaseProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 32 32">
      {children}
    </SvgIcon>
  );
};

export default IconBase;
