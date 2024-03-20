import { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Tharuka');
  const [age, setAge] = useState('28');

  const [people, setPeople] = useState([
    { name: 'Luigi', id: '1' },
    { name: 'Mario', id: '2' },
    { name: 'Radhi', id: '3' },
    { name: 'Lakshi', id: '4' },
    { name: 'Peach', id: '5' },
    { name: 'Bower', id: '6' },
    { name: 'Toad', id: '7' },
  ]);

  const pressHandler = (id: string) => {
    console.log(id);
    // setPeople(people.filter((peep) => peep.id != id));
    setPeople((prev) => {
      return prev.filter((peep) => peep.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 30'
        onChangeText={(val) => setAge(val)}
      />
      <Text>
        Name: {name}, Age: {age}
      </Text>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.peep}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  peep: {
    width: 150,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 24,
    marginVertical: 24,
  },
});
