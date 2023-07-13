export interface IDirection {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
  brands: string;
  pageLink: string;
  city: string;
  accent: boolean;
  combine: boolean;
}

export interface IBrand {
  id: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
  direction?: string;
  city?: string;
}

export interface IContact {
  id: string;
  title: string;
  name?: string;
  description?: string;
  phone?: string;
  email?: string;
  site?: string;
  social?: string;
  image?: string;
  city: string;
}

export interface IBranch {
  id: string;
  title: string;
  address: string;
  address_second?: string;
  schedule: string;
  phone: string;
  cover: string;
  email: string;
  pageLink: string;
  map: string;
  city: string;
}
