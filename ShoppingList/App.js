import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
// import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },     // each time uuid() is called, a unique number will be received
    { id: uuidv4(), text: 'Eggs' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Juice' },
  ]);

  const deleteItem = ( id ) => {
    setItems( prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = ( text ) => {
    if (!text) {    // if no text was entered
      // display alert message
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})

    } else {
      setItems( prevItems => {
        return [{ id: uuidv4(), text: text }, ...prevItems];
      });
    }
  }


  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
        <ListItem         // rendering each item's text
          item={item}
          deleteItem = {deleteItem}
          />
        )}
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