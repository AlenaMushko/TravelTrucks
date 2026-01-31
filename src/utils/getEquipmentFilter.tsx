import React from "react";

import {
  ACIcon,
  AutomaticIcon,
  KitchenIcon,
  ShowerIcon,
  TvIcon,
} from "@/shared/icons";

export interface EquipmentFilter {
  key: string;
  label: string;
  icon: React.ReactElement;
}

const EQUIPMENT_ICONS: Record<string, React.ComponentType> = {
  AC: ACIcon,
  automatic: AutomaticIcon,
  kitchen: KitchenIcon,
  TV: TvIcon,
  bathroom: ShowerIcon,
};

const EQUIPMENT_LABELS: Record<string, string> = {
  AC: "AC",
  automatic: "Automatic",
  kitchen: "Kitchen",
  TV: "TV",
  bathroom: "Bathroom",
};

const createEquipmentFilter = (key: string): EquipmentFilter => {
  const IconComponent = EQUIPMENT_ICONS[key];
  return {
    key,
    label: EQUIPMENT_LABELS[key],
    icon: <IconComponent />,
  };
};

export const getEquipmentFilter = (): EquipmentFilter[] => {
  const equipmentFilters: EquipmentFilter[] = [];

  equipmentFilters.push(createEquipmentFilter("AC"));
  equipmentFilters.push(createEquipmentFilter("automatic"));
  equipmentFilters.push(createEquipmentFilter("kitchen"));
  equipmentFilters.push(createEquipmentFilter("TV"));
  equipmentFilters.push(createEquipmentFilter("bathroom"));
  return equipmentFilters;
};
