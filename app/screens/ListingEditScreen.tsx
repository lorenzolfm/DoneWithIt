import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { useLocation } from '../hooks/useLocation';
import { addListing } from '../api/listings'

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from '../components/Forms'
import { CategoryPickerItem } from '../components/CategoryPickerItem';
import { Screen } from '../components/Screen';
import { FormImagePicker } from '../components/Forms/FormImagePicker';
import { Listing } from '../types';
import { UploadScreen } from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email'},
  { label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock' },
];

const initialValues = {
  title: '',
  price: '',
  description: '',
  category: null,
  images: [],
};

export const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleSubmit = async (listing: Listing) => {
    setProgress(0)
    setUploadVisible(true);
    const result = await addListing(
      {...listing, location},
      progress => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) {
      setUploadVisible(false);
      console.log(result.problem)
      return alert("Could not save the listing");
    }

    alert('Success');
  }

  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post"/>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
  },
})
