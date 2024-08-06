// src/auth/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationProps } from '../types';

const SignUpScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default SignUpScreen;
