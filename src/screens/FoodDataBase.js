//FoodDataBase.js
import { Picker } from '@react-native-picker/picker';
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Modal } from 'react-native';

import { MealPlanContext, MealPlanProvider } from './MealPlanContext';
function FoodDataBase() {
  const [query, setQuery] = useState('');
  const [foodData, setFoodData] = useState(null);
  const apiKey = 'dacc95eb7f686acff7554c0b78717ae3';
  const apiID = '2e532969';
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [mealType, setMealType] = useState('Breakfast');
  const [day, setDay] = useState('');
  const { updateMealPlan, mealPlan } = useContext(MealPlanContext);

  const handleSearch = async () => {
    const encodedQuery = encodeURIComponent(query);

    const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${apiID}&app_key=${apiKey}&ingr=${encodedQuery}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.hints.length > 0) {
        setFoodData(data.hints[0].food);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFoodSelected = () => {
    setModalVisible(true);
  };

  const handleFoodAdded = () => {
    if (foodData && quantity && mealType && day) {
      const foodItem = {
        label: foodData.label,
        calories: foodData.nutrients.ENERC_KCAL,
        quantity,
      };
      updateMealPlan(day, mealType, foodItem);
    }

    // Close the modal
    setModalVisible(false);
  };

  return (
    <MealPlanProvider>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <TextInput
            style={styles.input}
            placeholder="Rechercher un aliment"
            onChangeText={setQuery}
            value={query}
          />
          <Button title="Rechercher" onPress={handleSearch} color="#2A628F" />
        </View>
        <View style={styles.centerContainer}>
          {foodData && (
            <View style={styles.centerSection}>
              <Text style={styles.text}>{foodData.label}</Text>
              <Text style={styles.text}>Calories: {foodData.nutrients.ENERC_KCAL}</Text>
              <Button title="Ajouter cet aliment" onPress={handleFoodSelected} color="#2A628F" />
            </View>
          )}
        </View>

        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text>Choisissez la quantité</Text>
            <TextInput
              placeholder="Quantité"
              onChangeText={setQuantity}
              value={quantity}
              keyboardType="numeric"
            />
            <Text>Choisissez le repas de la journée</Text>
            <Picker selectedValue={mealType} onValueChange={(itemValue) => setMealType(itemValue)}>
              <Picker.Item label="Petit-déjeuner" value="Breakfast" />
              <Picker.Item label="Déjeuner" value="Lunch" />
              <Picker.Item label="Dîner" value="Dinner" />
              <Picker.Item label="Collation" value="Snack" />
            </Picker>
            <Text>Choisissez le jour</Text>
            <Picker selectedValue={day} onValueChange={(itemValue) => setDay(itemValue)}>
              <Picker.Item label="Lundi" value="Monday" />
              <Picker.Item label="Mardi" value="Tuesday" />
              <Picker.Item label="Mercredi" value="Wednesday" />
              <Picker.Item label="Jeudi" value="Thursday" />
              <Picker.Item label="Vendredi" value="Friday" />
              <Picker.Item label="Samedi" value="Saturday" />
              <Picker.Item label="Dimanche" value="Sunday" />
            </Picker>
            <Button title="Confirm" onPress={handleFoodAdded} color="#2A628F" />
          </View>
        </Modal>
      </View>
    </MealPlanProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#000',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centerSection: {
    backgroundColor: '#3E92CC',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default FoodDataBase;
