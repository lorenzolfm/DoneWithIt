import React from 'react';
import { GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { AppText } from './AppText';

import colors from '../config/colors';

type ListItemProps = {
  title: string,
  subtitle?: string,
  image?: ImageSourcePropType,
  onPress?: (event: GestureResponderEvent) => void,
  renderRightActions?: any,
  ImageComponent?: React.ReactNode,
};
export const ListItem = ({ title, subtitle, image, ImageComponent, onPress, renderRightActions }: ListItemProps) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}
      >
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.medium,
  },
});
