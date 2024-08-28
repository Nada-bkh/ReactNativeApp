import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type TicketScreenProps = {
  route: {
    params: {
      event: any;
    };
  };
};

const TicketScreen: React.FC<TicketScreenProps> = ({ route }) => {
  const { event } = route.params;

  return (
    <View>
      <Text>Ticket for {event.name}</Text>
      <Text>Location: {event.location}</Text>
      <Text>Date: {new Date(event.date).toLocaleString()}</Text>
      <QRCode value={`Ticket for ${event.name} at ${event.location} on ${new Date(event.date).toLocaleString()}`} />
    </View>
  );
};

export default TicketScreen;
