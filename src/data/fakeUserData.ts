import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: number;
  username: string;
  password: string; 
  email: string;
};

const initialUsers: User[] = [
  {
    id: 1,
    username: 'nada',
    password: 'nada123',
    email: 'nada@gmail.com',
  },
  {
    id: 2,
    username: 'ala',
    password: 'ala123',
    email: 'ala@gmail.com',
  },
];

const initializeUsers = async () => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    if (!storedUsers) {
      await AsyncStorage.setItem('users', JSON.stringify(initialUsers));
    }
  } catch (error) {
    console.error('Failed to initialize users:', error);
  }
};
initializeUsers();

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
};

export const fetchUserById = async (id: number): Promise<User | undefined> => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    return users.find((user: User) => user.id === id);
  } catch (error) {
    console.error('Failed to fetch user by ID:', error);
    return undefined;
  }
};

export const authenticateUser = async (username: string, password: string): Promise<User | string> => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    const user = users.find((user: User) => user.username === username && user.password === password);
    if (user) {
      return user;
    } else {
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    console.error('Failed to authenticate user:', error);
    return 'Invalid username or password';
  }
};

export const registerUser = async (username: string, password: string, email: string): Promise<string> => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    const userExists = users.some((user: User) => user.username === username || user.email === email);

    if (userExists) {
      throw new Error('User already exists');
    } else {
      const newUser: User = {
        id: users.length + 1,
        username,
        password,
        email,
      };
      users.push(newUser);
      await AsyncStorage.setItem('users', JSON.stringify(users));
      return 'Registration successful';
    }
  } catch (error) {
    console.error('Failed to register user:', error);
    return 'User already exists';
  }
};
