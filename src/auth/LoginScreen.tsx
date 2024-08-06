// src/auth/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NavigationProps } from '../types';
import { authenticateUser } from '../data/fakeUserData';

const LoginScreen: React.FC<NavigationProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await authenticateUser(username, password);
      if (typeof user === 'string') {
        Alert.alert('Login Failed', user);
      } else {
        Alert.alert('Login Successful', `Welcome, ${user.username}`);
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default LoginScreen;
