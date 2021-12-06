import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { AppText } from './AppText';

import colors from '../config/colors';

type ListItemProps = {
  title: string,
  subtitle: string,
  image: ImageSourcePropType,
};

export const ListItem = ({ title, subtitle, image }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.medium,
  }
})
