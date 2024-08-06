import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';
import SignUpScreen from '../auth/SignUpScreen';
import HomeScreen from '../home/HomeScreen';
import EventListScreen from '../events/EventListScreen';
import EventCard from 'components/EventCard';
import AddEventScreen from '../events/AddEventScreen';
import ReservationScreen from '../reservation/ReservationScreen';
import TicketScreen from '../reservation/TicketScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventList" component={EventListScreen} />
        <Stack.Screen name="EventDetail" component={EventCard} />
        <Stack.Screen name="AddEvent" component={AddEventScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        <Stack.Screen name="Ticket" component={TicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
