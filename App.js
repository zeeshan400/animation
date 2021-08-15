import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import FlatListAnimation from './screens/flatListAnimation';
import Chat from './screens/chat/chat';
import ChatList from './screens/chat/chatList';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'ChatList'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={'FlatListAnimation'}
          component={FlatListAnimation}></Stack.Screen>
        <Stack.Screen name={'Chat'} component={Chat}></Stack.Screen>
        <Stack.Screen name={'ChatList'} component={ChatList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
