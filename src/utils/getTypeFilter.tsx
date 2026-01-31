import React from "react";

import { AlcoveIcon, VanIcon, FullyIntegratedIcon } from "@/shared/icons";

export interface TypeFilter {
  key: string;
  label: string;
  icon: React.ReactElement;
}

const TYPE_ICONS: Record<string, React.ComponentType> = {
  van: VanIcon,
  fullyIntegrated: FullyIntegratedIcon,
  alcove: AlcoveIcon,
};

const TYPE_LABELS: Record<string, string> = {
  van: "Van",
  fullyIntegrated: "Fully Integrated",
  alcove: "Alcove",
};

const createTypeFilter = (key: string): TypeFilter => {
  const IconComponent = TYPE_ICONS[key];
  return {
    key,
    label: TYPE_LABELS[key],
    icon: <IconComponent />,
  };
};

export const getTypeFilter = (): TypeFilter[] => {
  const typeFilters: TypeFilter[] = [];

  typeFilters.push(createTypeFilter("van"));
  typeFilters.push(createTypeFilter("fullyIntegrated"));
  typeFilters.push(createTypeFilter("alcove"));
  return typeFilters;
};
