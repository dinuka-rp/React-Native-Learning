import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },     // each time uuid() is called, a unique number will be received
    { id: uuidv4(), text: 'Eggs' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Juice' },
  ]);

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}   // rendering each item's text
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 60,    // same height as the header
  },
})

export default App;