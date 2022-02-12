import React, { useContext, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import { Screen } from '../components/Screen';
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/Forms';
import { login } from '../api/auth';
import { AuthContext } from '../auth/context';
import { User, UserState } from '../types';
import { storeToken } from '../auth/storage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const initialValues = {
  email: '',
  password: '',
};

interface IAuth {
  email: string,
  password: string,
}

export const LoginScreen = () => {
  const authContext = useContext<UserState>(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: IAuth) => {
    const result = await login(email, password);

    if (!result.ok) {
      setLoginFailed(true);
      return;
    }

    setLoginFailed(false);
    const user: User = jwtDecode(result.data as string);
    authContext.setUser(user);
    storeToken(result.data as string);
  }
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
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
