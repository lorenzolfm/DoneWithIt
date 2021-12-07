import React from 'react';
import { GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { AppText } from './AppText';

import colors from '../config/colors';

type ListItemProps = {
  title: string,
  subtitle: string,
  image: ImageSourcePropType,
  onPress?: (event: GestureResponderEvent) => void,
  renderRightActions?: any,
};

export const ListItem = ({ title, subtitle, image, onPress, renderRightActions }: ListItemProps) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
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
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.medium,
  },
});
