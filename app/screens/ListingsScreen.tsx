import React from 'react';
import { FlatList, StyleSheet } from "react-native";

import { Card } from '../components/Card';
import { Screen } from "../components/Screen";
import colors from '../config/colors';

const listings = [
  {
    id: 0,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 1,
    title: 'Couch in great condition',
    price: 100,
    image: require('../assets/couch.jpg')
  },
];

export const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});