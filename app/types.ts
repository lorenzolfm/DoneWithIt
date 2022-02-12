import React from "react";

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

export interface Image {
  name: string,
  type: string,
  url: string,
  thumbnailUrl: string,
}

export interface Location {
  latitude: number,
  longitude: number,
}

export interface Listing {
  id: number;
  title: string,
  price: number,
  category?: any,
  description: string,
  images: Image[],
  location?: Location,
}

type UserSetter = React.Dispatch<React.SetStateAction<User | undefined>>;
export interface UserState {
  user: User | undefined;
  setUser: UserSetter;
}

export interface User {
  email: string;
  password: string;
}
