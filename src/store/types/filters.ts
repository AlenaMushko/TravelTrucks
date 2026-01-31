export interface FiltersState {
  location: string;
  AC: boolean;
  automatic: boolean;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
  van: boolean;
  fullyIntegrated: boolean;
  alcove: boolean;
}

export interface FilterOption {
  label: string;
  value: string;
}
