import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

import colors from '../config/colors';
import { AppText } from "./AppText";
type CardProps = {
  title: string,
  subtitle: string,
  image: ImageSourcePropType,
}
export const Card = ({ title, subtitle, image }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: { padding: 20 },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  }
});
