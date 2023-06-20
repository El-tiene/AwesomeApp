import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MealPlanContext } from './MealPlanContext';

const MealPlanning = () => {
  const { mealPlan, setMealPlan } = useContext(MealPlanContext);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}
    >
      {Object.entries(mealPlan).map(([day, meals]) => (
        <View key={day} style={styles.dayContainer}>
          <Text style={styles.dayText}>
            {getFrenchDayLabel(day)}
          </Text>
          {Object.entries(meals).map(([mealType, foodItems]) => (
            <View key={mealType} style={styles.mealSection}>
              <Text style={styles.mealSectionTitle}>
                {getFrenchMealLabel(mealType)}
              </Text>
              {foodItems.map((food, index) => (
                <Text key={index} style={styles.foodItemText}>
                  {food}
                </Text>
              ))}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const getFrenchDayLabel = (day) => {
  switch (day) {
    case 'Monday':
      return 'Lundi';
    case 'Tuesday':
      return 'Mardi';
    case 'Wednesday':
      return 'Mercredi';
    case 'Thursday':
      return 'Jeudi';
    case 'Friday':
      return 'Vendredi';
    case 'Saturday':
      return 'Samedi';
    case 'Sunday':
      return 'Dimanche';
    default:
      return day;
  }
};

const getFrenchMealLabel = (mealType) => {
  switch (mealType) {
    case 'Breakfast':
      return 'Petit-déjeuner';
    case 'Lunch':
      return 'Déjeuner';
    case 'Dinner':
      return 'Dîner';
    case 'Snack':
      return 'Collation';
    default:
      return mealType;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  scrollView: {
    backgroundColor: 'black',
  },
  dayContainer: {
    backgroundColor: '#3E92CC',
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
  },
  dayText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mealSection: {
    marginVertical: 5,
  },
  mealSectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MealPlanning;
