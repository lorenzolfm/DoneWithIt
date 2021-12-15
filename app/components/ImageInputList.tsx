import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ImageInput } from './ImageInput';


type Props = {
  imageUris: string[],
  onRemoveImage: Function,
  onAddImage: Function,
}
export const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }: Props) => {
  return (
    <View style={styles.container}>
      {imageUris.map((uri: string) => (
        <View key={uri} style={styles.image}>
          <ImageInput
            imageUri={uri}
            onChangeImage={uri => onRemoveImage(uri)}
          />
        </View>
      ))}
      <ImageInput onChangeImage={onAddImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});
