import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from "react-native";

import { Card } from '../components/Card';
import { Screen } from "../components/Screen";
import { ActivityIndicator } from '../components/ActivityIndicator';
import { Navigation } from '../types'
import routes from '../navigation/routes';
import { getListings } from '../api/listings';

import defaultStyles from '../config/styles';
import { AppText } from '../components/AppText';
import { Button } from '../components/Button';
import { useApi } from '../hooks/useApi';

export const ListingsScreen = ({ navigation: { navigate } }: Navigation) => {
  const { data: listings, error, loading, request: loadListings } = useApi(getListings)

  useEffect(() => {
    loadListings();
  }, [])

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
            thumbnailUrl={item.images[0].thumbnailUrl}
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
