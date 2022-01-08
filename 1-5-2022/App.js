import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'FIRST PAGE',
          }}
        />

        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'SECOND PAGE',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
