import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyReduxList from '../components/MyReduxList';
import AddNewRow from '../screens/AddNewRow/AddNewRow';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyReduxList} />
      <Stack.Screen name="AddNewRow" component={AddNewRow} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
