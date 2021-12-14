import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import { AppText } from './AppText';
import { Screen } from './Screen';

import { Category } from '../types';
import { PickerItem } from './PickerItem';

type Props = {
  icon?: any,
  placeholder?: string,
  items?: Category[],
  width?: number | string,
  selectedItem: Category,
  onSelectItem: Function,
};
export const AppPicker = ({ icon, placeholder, items, width = '100%', selectedItem, onSelectItem }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
          {selectedItem ?
            <AppText style={styles.text}>{selectedItem.label}</AppText> :
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          }
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={
              ({ item }) =>
                <PickerItem label={item.label} onPress={() => { setModalVisible(false); onSelectItem(item) }} />
            }
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  }
});
