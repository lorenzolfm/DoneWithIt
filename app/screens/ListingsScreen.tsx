import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from "react-native";

import { Card } from '../components/Card';
import { Screen } from "../components/Screen";
import { Navigation } from '../types'
import routes from '../navigation/routes';
import { getListings } from '../api/listings';
import { Listing } from '../types';

import defaultStyles from '../config/styles';

export const ListingsScreen = ({ navigation: { navigate } }: Navigation) => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    loadListings();
  }, [])

  const loadListings = async () => {
    const response = await getListings();
    setListings(response.data as Listing[]);
  }

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigate(routes.LISTING_DETAILS, item)}
          />
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: defaultStyles.colors.light,
  },
});
