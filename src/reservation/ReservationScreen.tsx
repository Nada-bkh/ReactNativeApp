import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { NavigationProps } from '../types';


type RouteParams = {
  event: {
    name: string;
    location: string;
    date: string;
  };
};

type ReservationScreenProps = NavigationProps & {
  route: {
    params: RouteParams;
  };
};

const ReservationScreen: React.FC<ReservationScreenProps> = ({ route, navigation }) => {
  const { event } = route.params;
  const [reserved, setReserved] = useState(false);

  const handleReservation = () => {
    setReserved(true);
  };

  return (
    <View>
      <Text>{event.name}</Text>
      <Text>{event.location}</Text>
      <Text>{new Date(event.date).toLocaleString()}</Text>
      {reserved ? (
        <QRCode value={`Reservation for ${event.name} at ${event.location}`} />
      ) : (
        <Button title="Reserve" onPress={handleReservation} />
      )}
      <Button title="Back to Events" onPress={() => navigation.navigate('EventList')} />
    </View>
  );
};

export default ReservationScreen;
