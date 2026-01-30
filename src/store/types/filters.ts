export interface FiltersState {
  location: string;
  form: string | null;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}

export interface FilterOption {
  label: string;
  value: string;
}
