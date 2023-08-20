import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';




  const Stack = createStackNavigator();
  
  function WordListScreen({ navigation }) {
    const [wordList, setWordList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWordList();
  }, []);
   

  const fetchWordList = async () => {
    try {
      const response = await axios.get('https://api.datamuse.com/words?rel_jja=carat');
      setWordList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching word list:', error);
      setIsLoading(false)
    }
    
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('WordDetail', { word: item.word })} 
      >
       <Text style={styles.word}>{item.word}</Text>
    </TouchableOpacity>
    
  );


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Word List</Text>
      <Text style={styles.head}>Click on a word to view it.</Text>
      {isLoading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#007BFF" />
      ) : (
      <FlatList
        data={wordList}
        renderItem={renderItem}
        keyExtractor={(item) => item.word}
        contentContainerStyle={styles.list}
      />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

  function WordDetailScreen({ route }) {
    const { word } = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{word}</Text>
      </View>
    );
  }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007BFF', // Set your desired color here
          },
          headerTintColor: 'white', // Text color of navigation bar buttons
        }}
      >

        <Stack.Screen name="WordList" component={WordListScreen} style={styles.nav} />
        <Stack.Screen name="WordDetail" component={WordDetailScreen} style={styles.nav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  head: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',

  },

  nav: {
    backgroundColor: '#0000',

  },

  list: {
    paddingHorizontal: 20,
  },

  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  word: {
    fontSize: 16,
    color: '#333',
  },
  loader: {
    marginTop: 20,
  },
});
