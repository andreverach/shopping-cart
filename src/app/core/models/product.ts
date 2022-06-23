export interface Product {
  id          : number;
  title       : string;
  price       : number;
  description : string;
  category    : string;
  image       : string;
  rating      : Rating;
}

interface Rating{
  rate  : number;
  count : number;
}

export interface CartProduct extends Product{
  quantity?: number;
}