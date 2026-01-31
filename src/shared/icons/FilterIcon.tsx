import { SvgIcon, type SvgIconProps } from "@mui/material";

interface FilterIconProps extends Omit<SvgIconProps, "viewBox"> {}

const FilterIcon = ({ sx, ...props }: FilterIconProps) => {
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
        d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default FilterIcon;
