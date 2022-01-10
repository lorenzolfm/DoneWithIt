import { ImageSourcePropType } from "react-native";

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
  image: ImageSourcePropType,
}
