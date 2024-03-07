import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Image } from 'react-native';


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>數位二甲 許雅涵</Text>
        
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 70,
  },
  
});

export default App;
