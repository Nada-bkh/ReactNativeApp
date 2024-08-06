// src/screens/EventListScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchEvents } from '../data/fakeData';
import EventCard from '../components/EventCard';
import { NavigationProps , Event } from '../types';

const EventListScreen : React.FC<NavigationProps> = ({ navigation }) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
      const events = await fetchEvents();
      setEvents(events);
    };

    loadEvents();
  }, []);

  const handleEventPress = (id: number) => {
    navigation.navigate('EventDetail', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Event List</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventCard
            id={item.id}
            name={item.name}
            date={item.date}
            time={item.time}
            location={item.location}
            image={item.image}
            onPress={handleEventPress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default EventListScreen;
