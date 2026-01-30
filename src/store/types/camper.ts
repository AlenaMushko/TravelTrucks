export const Transmission = {
  AUTOMATIC: "automatic",
  MANUAL: "manual",
} as const;

export type Transmission = (typeof Transmission)[keyof typeof Transmission];

export const Engine = {
  PETROL: "petrol",
  DIESEL: "diesel",
  ELECTRIC: "electric",
  HYBRID: "hybrid",
} as const;

export type Engine = (typeof Engine)[keyof typeof Engine];

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface GalleryImage {
  thumb: string;
  original: string;
}

export interface CampersQueryParams {
  location?: string;
  form?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  page?: number;
  limit?: number;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryImage[];
  reviews: Review[];
}

export interface CampersResponse {
  total: number;
  items: Camper[];
}
