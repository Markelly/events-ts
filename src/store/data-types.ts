export interface Location {
  businessName: string;
  businessWebsite: string;
  city: string;
  continent: string;
  country: string;
  countryCode: string;
  ipName: string;
  ipType: string;
  isp: string;
  lat: string;
  lon: string;
  org: string;
  query: string;
  region: string;
  status: string;
}

export interface DateType {
  spanMultipleDays: boolean;
  start: object;
  dateTBD: boolean;
  localDate: string;
  noSpecificTime: boolean;
  timeTBA: boolean;
  status: object;
  timezone: string;
}

export interface PriceRange {
  currency: string;
  max: number;
  min: number;
  type: string;
}

export interface Event {
  dates: Date[];
  id: string;
  image: string;
  locale: string;
  name: string;
  price: string;
  url: string;
  favorite: boolean;
}

export interface EventResponse {
  classifications: object[];
  dates: Date[];
  id: string;
  images: object[];
  locale: string;
  name: string;
  priceRanges: PriceRange[];
  promoter: object;
  promoters: object[];
  sales: object;
  test: boolean;
  type: string;
  url: string;
  favorite: boolean;
}

export interface Page {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface User {
  isAuthenticated: boolean;
  isRegistered: boolean;
  isConfirmed: boolean;
  authError: string;
}
