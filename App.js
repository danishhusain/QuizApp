import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Text, View,Button, StyleSheet } from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';
import MyStack from "./navigation/Index"
// import MyStack from "./navigation/Index"

const App = () => {
  return (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
    // <Quiz/>
    // <Home/>
    // <Result/>


  )
}

export default App;
const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'white'
  }
});

