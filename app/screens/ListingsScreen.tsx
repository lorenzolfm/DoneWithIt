import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from "react-native";

import { Card } from '../components/Card';
import { Screen } from "../components/Screen";
import { ActivityIndicator } from '../components/ActivityIndicator';
import { Navigation } from '../types'
import routes from '../navigation/routes';
import { getListings } from '../api/listings';
import { Listing } from '../types';

import defaultStyles from '../config/styles';
import { AppText } from '../components/AppText';
import { Button } from '../components/Button';

export const ListingsScreen = ({ navigation: { navigate } }: Navigation) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadListings();
  }, [])

  const loadListings = async () => {
    setLoading(true);
    const response = await getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false)
    setListings(response.data as Listing[]);
  }

  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Couldn't retrieve listings</AppText>
        <Button onPress={loadListings} title="Retry" />
      </>}
      <ActivityIndicator visible={loading}/>
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
