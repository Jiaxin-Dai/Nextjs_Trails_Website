import { MouseEventHandler } from "react";


export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}


export interface FilterProps {
  latitude: number;
  longitude: number;
  page?: number;
  per_page?: number;
  radius?: number;
}
export interface HomeProps {
  searchParams: FilterProps;
}
export interface Trail {
  id: number;
  name: string;
  location: string;
}

export interface TrailCardProps {
  trail: TrailProps;
}

export interface TrailProps {
  id: number;
  name: string;
  url: string;
  length: number;
  description: string;
  city: string;
  region: string;
  country: string;
  lat: string;
  lon: string;
  difficulty: string;
  features: string;
  rating: number;
  thumbnail: string;
}