import React from 'react';
import { Image, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import defaultStyles from '../config/styles';
import { AppText } from "./AppText";

type CardProps = {
  title: string,
  subtitle: string,
  imageUrl: string,
  onPress: () => void,
}

export const Card = ({ title, subtitle, imageUrl, onPress }: CardProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{uri: imageUrl}} style={styles.image}/>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
          <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
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
    color: defaultStyles.colors.secondary,
    fontWeight: 'bold',
  }
});
