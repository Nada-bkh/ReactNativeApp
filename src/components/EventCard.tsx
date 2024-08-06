// src/components/EventCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type EventCardProps = {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  image: string;
  onPress: (id: number) => void;
};

const EventCard: React.FC<EventCardProps> = ({ id, name, date, time, location, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
  time: {
    fontSize: 16,
    color: '#555',
  },
  location: {
    fontSize: 16,
    color: '#555',
  },
});

export default EventCard;
