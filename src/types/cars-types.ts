export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}

export interface CarsResponse {
  cars: Car[];
  page: number;
  totalPages: number;
  totalCars: number;
}

export interface PaginationsParams {
  page?: number;
  limit?: number;
}

export interface CarsFilterParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
}

export type CarsParams = PaginationsParams & CarsFilterParams;

export const defaultValue: Car = {
  id: "",
  year: 0,
  brand: "",
  model: "",
  type: "",
  img: "",
  description: "",
  fuelConsumption: "",
  engineSize: "",
  accessories: [],
  functionalities: [],
  rentalPrice: "",
  rentalCompany: "",
  address: "",
  rentalConditions: [],
  mileage: 0,
};
