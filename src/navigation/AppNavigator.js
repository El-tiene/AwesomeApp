import React from 'react';
import {StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MealPlanProvider } from '../screens/MealPlanContext';


import FoodDataBase from '../screens/FoodDataBase';
import HealthGoals from '../screens/HealthGoals';
import MealPlanning from '../screens/MealPlanning';
const Stack = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <MealPlanProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MealPlanning"
        >        
        <Stack.Screen name="FoodDataBase" component={FoodDataBase} />
        <Stack.Screen name="HealthGoals" component={HealthGoals} />
        <Stack.Screen name="MealPlanning" component={MealPlanning} />
      </Stack.Navigator>
    </NavigationContainer>
    </MealPlanProvider>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  banderole:{
    background: '#16324F',
    text: '#ffffff',
  },
});

