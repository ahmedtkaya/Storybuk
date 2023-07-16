import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './pages/Mainpage';
import CategoryItems from './pages/CategoryItems';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={MainPage}
          name="Main"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CategoryItems}
          name="CategoryItems"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Detail}
          name="Detail"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
