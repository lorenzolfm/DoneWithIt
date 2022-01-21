import React from 'react';
import { View, Modal, StyleSheet } from "react-native"
import { AppText } from "../components/AppText"

type Props = { progress: number, visible: boolean }

export const UploadScreen = ({ progress = 0, visible = false }: Props) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
