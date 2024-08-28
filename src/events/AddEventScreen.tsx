import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationProps } from '../types';

const AddEventScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [image, setImage] = useState('');

  const handleAddEvent = () => {
    navigation.navigate('EventList');
  };

  return (
    <View>
      <Text>Add Event</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <DateTimePicker value={date} mode="date" display="default" onChange={(event, selectedDate) => setDate(selectedDate || date)} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} />
      <TextInput placeholder="Capacity" value={capacity} onChangeText={setCapacity} keyboardType="numeric" />
      <TextInput placeholder="Image URL" value={image} onChangeText={setImage} />
      <Button title="Add Event" onPress={handleAddEvent} />
    </View>
  );
};

export default AddEventScreen;
