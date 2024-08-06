import AsyncStorage from '@react-native-async-storage/async-storage';

type Event = {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  image: string;
};

const initialEvents: Event[] = [
  {
    id: 1,
    name: 'Concert',
    date: '2024-08-15',
    time: '19:00',
    location: 'Main Hall',
    capacity: 100,
    image: 'https://cdn.sortiraparis.com/images/1001/1665/1026578-jazz-in-marciac-2021-zucchero-kimberose-ibrahim-maalouf-la-programmation-devoilee.jpg',
  },
  {
    id: 2,
    name: 'Salsa',
    date: '2024-09-01',
    time: '10:00',
    location: 'Art Gallery',
    capacity: 50,
    image: 'https://media.istockphoto.com/id/507748667/vector/latin-dance.jpg?s=2048x2048&w=is&k=20&c=_9WkLt54Myadg3N-k_5zvYX9lmGL7BLRbTvNKBHizoQ=',
  },
];
const initializeEvents = async () => {
  try {
    const storedEvents = await AsyncStorage.getItem('events');
    if (!storedEvents) {
      await AsyncStorage.setItem('events', JSON.stringify(initialEvents));
    }
  } catch (error) {
    console.error('Failed to initialize events:', error);
  }
};

initializeEvents();

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const storedEvents = await AsyncStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return [];
  }
};

export const fetchEventById = async (id: number): Promise<Event | undefined> => {
  try {
    const storedEvents = await AsyncStorage.getItem('events');
    const events = storedEvents ? JSON.parse(storedEvents) : [];
    return events.find((event: Event) => event.id === id);
  } catch (error) {
    console.error('Failed to fetch event by ID:', error);
    return undefined;
  }
};

export const addEvent = async (event: Event): Promise<string> => {
  try {
    const storedEvents = await AsyncStorage.getItem('events');
    const events = storedEvents ? JSON.parse(storedEvents) : [];
    event.id = events.length + 1; // AI
    events.push(event);
    await AsyncStorage.setItem('events', JSON.stringify(events));
    return 'Event added successfully';
  } catch (error) {
    console.error('Failed to add event:', error);
    return 'Failed to add event';
  }
};