export interface Navigation {
  navigation: {
    navigate(route: string, params: any): void;
  }
}

export interface Category {
  label: string,
  value: number,
};

export interface IIndexable {
  [key: string]: any,
};

export interface Listing {
  id: number;
  title: string,
  price: number,
  images: {
    url: string,
    thumbnailUrl: string,
  }[],
}
