import React from "react";

export interface Navigation {
  navigation: {
    navigate: (route: string, params?: any) => void;
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

export type TUser = User | null;
type UserSetter = React.Dispatch<React.SetStateAction<TUser>>;

export interface UserState {
  user: TUser;
  setUser: UserSetter;
}

export interface User {
  name: string;
  email: string;
  password: string;
}
