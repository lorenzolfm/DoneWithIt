import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { Screen } from '../components/Screen';
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/Forms';
import { User } from '../types';
import { register } from '../api/users';
import { login } from '../api/auth';
import { useAuth } from '../auth/useAuth';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const initialValues = { name: '', email: '', password: '' };

export const RegisterScreen = () => {
  const { logIn } = useAuth();
  const [error, setError] = useState<string | null>();

  const handleSubmit = async (userInfo: User): Promise<void> => {
    const result = await register(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data?.error);
      else {
        setError('An unexpected error occurred.');
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await login(
      userInfo.email,
      userInfo.password,
    );
    logIn(authToken as string);
  }

  return (
    <Screen style={styles.container}>

      <ErrorMessage visible={error !== '' ? true : false} error={error as string} />
      <AppForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
