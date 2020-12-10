import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Feed from './src/pages/Feed';
import SignIn from './src/pages/SignIn';
//import SignUp from './src/pages/SignUp';
import nameLogo from './src/imgs/Instagram-name-logo.png';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerTitle: () => <Image source = {nameLogo} />}}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Feed" component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)


