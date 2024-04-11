import React, { useState } from 'react';
import { StatusBar, TextInput } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './Styles'; // Importing styles

export default function Homescreen({ navigation }) {
  const [inputValue, levelValue] = useState(''); 

  const handlePress = () => {
    let jsonData;
    if (inputValue.trim() === '') {
      jsonData = { inputValue: 10 }; 
    } else {
      jsonData = { inputValue: parseInt(inputValue) };
    }
    navigation.navigate("List", { jsonData });
  };
 
  return (
    <SafeAreaProvider>
      <View style={styles.containerHome}>
        <TextInput
          style={styles.inputHome}
          onChangeText={levelValue}
          value={inputValue}
          placeholder="Enter a number"
          keyboardType="numeric"
        />
        <Button
          title="Redirect to ListScreen.js"
          onPress={handlePress}
          style={styles.buttonHome}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}   