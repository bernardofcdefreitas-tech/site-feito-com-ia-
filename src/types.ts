export interface SpecItem {
  label: string;
  value: string;
}

export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  year: number;
  mileage: string;
  price: number;
  category: "adventure" | "naked" | "sport";
  image: string;
  badge?: string;
  description: string;
  longDescription: string;
  specs: SpecItem[];
  color: string;
}

export interface BookingRequest {
  motorcycleId: string;
  motorcycleName: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  notes?: string;
}
