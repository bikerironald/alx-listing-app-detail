export interface CardProps {
  title: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  description?: string;
  price: number;
  reviews: Review[]
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

