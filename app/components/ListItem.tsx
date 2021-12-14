import React from 'react';
import { GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { AppText } from './AppText';

import defaultStyles from '../config/styles';

type ListItemProps = {
  title: string,
  subtitle?: string,
  image?: ImageSourcePropType,
  onPress?: (event: GestureResponderEvent) => void,
  renderRightActions?: any,
  IconComponent?: React.ReactNode,
  showChevrons?: boolean,
};
export const ListItem = ({
  title, subtitle, image, IconComponent, onPress, renderRightActions, showChevrons = false
}: ListItemProps) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={defaultStyles.colors.light}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
          </View>
          {showChevrons &&
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={defaultStyles.colors.medium}
            />
          }
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: defaultStyles.colors.medium,
  },
});
