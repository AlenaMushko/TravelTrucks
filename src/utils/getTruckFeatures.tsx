import React from "react";

import type { Camper } from "@/store/types";
import { Transmission, Engine } from "@/store/types";
import {
  ACIcon,
  AutomaticIcon,
  GasIcon,
  KitchenIcon,
  MicrowaveIcon,
  PetrolIcon,
  RadioIcon,
  RefrigeratorIcon,
  ShowerIcon,
  TvIcon,
  WaterIcon,
} from "@/shared/icons";

export interface TruckFeature {
  key: string;
  label: string;
  icon: React.ReactElement;
}

const FEATURE_ICONS: Record<string, React.ComponentType> = {
  automatic: AutomaticIcon,
  AC: ACIcon,
  petrol: PetrolIcon,
  kitchen: KitchenIcon,
  radio: RadioIcon,
  bathroom: ShowerIcon,
  refrigerator: RefrigeratorIcon,
  TV: TvIcon,
  microwave: MicrowaveIcon,
  gas: GasIcon,
  water: WaterIcon,
};

const FEATURE_LABELS: Record<string, string> = {
  automatic: "Automatic",
  AC: "AC",
  petrol: "Petrol",
  kitchen: "Kitchen",
  radio: "Radio",
  bathroom: "Bathroom",
  TV: "TV",
  refrigerator: "Refrigerator",
  microwave: "Microwave",
  gas: "Gas",
  water: "Water",
};

const createFeature = (key: string): TruckFeature => {
  const IconComponent = FEATURE_ICONS[key];
  return {
    key,
    label: FEATURE_LABELS[key],
    icon: <IconComponent />,
  };
};

export const getTruckFeatures = (truck: Camper): TruckFeature[] => {
  const features: TruckFeature[] = [];

  if (truck.transmission === Transmission.AUTOMATIC) {
    features.push(createFeature("automatic"));
  }

  if (truck.AC) {
    features.push(createFeature("AC"));
  }

  if (truck.engine === Engine.PETROL) {
    features.push(createFeature("petrol"));
  }

  if (truck.kitchen) {
    features.push(createFeature("kitchen"));
  }

  if (truck.radio) {
    features.push(createFeature("radio"));
  }

  if (truck.bathroom) {
    features.push(createFeature("bathroom"));
  }

  if (truck.refrigerator) {
    features.push(createFeature("refrigerator"));
  }

  if (truck.TV) {
    features.push(createFeature("TV"));
  }

  if (truck.microwave) {
    features.push(createFeature("microwave"));
  }

  if (truck.gas) {
    features.push(createFeature("gas"));
  }

  if (truck.water) {
    features.push(createFeature("water"));
  }

  return features;
};
