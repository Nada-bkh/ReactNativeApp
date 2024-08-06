// src/types.ts
import { NavigationScreenProp } from 'react-navigation';

export type NavigationProps = {
  navigation: NavigationScreenProp<any, any>;
};

export type Event = {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  image: string;
};