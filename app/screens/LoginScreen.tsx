import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AppTextInput } from '../components/AppTextInput';
import { Button } from '../components/Button';
import { Screen } from '../components/Screen';
import { AppText } from '../components/AppText';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo}/>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        { ({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              icon="email"
              placeholder="Email"
              textContentType="email"
            />
            <AppText style={{ color: 'red' }}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange('password')}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />
            <AppText style={{ color: 'red' }}>{errors.password}</AppText>
            <Button title="Login" onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
