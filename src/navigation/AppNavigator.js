import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import FoodDataBase from '../screens/FoodDataBase';
import HealthGoals from '../screens/HealthGoals';
import MealPlanning from '../screens/MealPlanning';
const Stack = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MealPlanning"
        screenOptions={{
          headerStyle: styles.banderole,
        }}
        tabBarOptions={{
          style: styles.banderole,
        }}>
        <Stack.Screen name="FoodDataBase" component={FoodDataBase} />
        <Stack.Screen name="HealthGoals" component={HealthGoals} />
        <Stack.Screen name="MealPlanning" component={MealPlanning} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  banderole: {
    background: '#16324F',
    text: '#ffffff',
  },
});
