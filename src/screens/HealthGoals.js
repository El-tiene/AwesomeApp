import React, { useState} from 'react';
import {Button, View, Text, TextInput,StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';


function HealthGoals() {

   const calcBMR = (age, gender, height, weight) => {
    let bmr = 0;

    if (gender === 'homme') {
      bmr =
        88.362 +
        13.397 *weight +
        4.799 *height -
        5.677 *age;
    } else if (gender === 'femme') {
      bmr =
        447.593 +
        9.247 *weight +
        3.098 *height -
        4.33 *age;
    }

    return bmr;
  };

   const adjustBMR = (bmr) => {
    let adjustedBMR = 0;

    switch (activityLevel) {
      case 'sédentaire':
        adjustedBMR = bmr * 1.2;
        break;
      case 'exercice-léger':
        adjustedBMR = bmr * 1.375;
        break;
      case 'exercice-modéré':
        adjustedBMR = bmr * 1.55;
        break;
      case 'exercice-intense':
        adjustedBMR = bmr * 1.725;
        break;
      case 'très-actif':
        adjustedBMR = bmr * 1.9;
        break;
      default:
        adjustedBMR = bmr;
        break;
    }

    return adjustedBMR;
  };

  const calcCaloricNeed = (adjustedBMR) => {
    let adjustedCaloricNeed = 0;

    switch (healthGoal) {
      case 'perte-de-poids':
        adjustedCaloricNeed = adjustedBMR * 0.9;
        break;
      case 'prise-de-poids':
        adjustedCaloricNeed = adjustedBMR * 1.1;
        break;
      default:
        adjustedCaloricNeed = adjustedBMR;
        break;
    }

    return adjustedCaloricNeed;
  };
  
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('homme');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [healthGoal, setHealthGoal] = useState('');

  const [caloricNeed,setcaloricNeed] = useState('');
  let [displayCaloricNeed, setDisplayCaloricNeed] = useState(false);


  const validForm = () => {
      const bmr=calcBMR(age, gender, height, weight);
      const adjustedBMR=adjustBMR(bmr);
      const caloricNeed=calcCaloricNeed(adjustedBMR).toFixed(0);
      setcaloricNeed(caloricNeed) ;
      setDisplayCaloricNeed(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formulaire}>
        <Text style={styles.text}>Renseignez vos informations</Text>
        <TextInput
          style={styles.input}
          placeholder="Âge"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <Picker
          style={styles.input}
          selectedValue={gender}
          onValueChange={setGender}
        >
          <Picker.Item label="Homme" value="homme" />
          <Picker.Item label="Femme" value="femme" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Taille (cm)"
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Poids (kg)"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
        <Picker
          style={styles.input}
          selectedValue={activityLevel}
          onValueChange={setActivityLevel}
        >
          <Picker.Item label="Sédentaire" value="sédentaire" />
          <Picker.Item label="Exercice léger" value="exercice-léger" />
          <Picker.Item label="Exercice modéré" value="exercice-modéré" />
          <Picker.Item label="Exercice intense" value="exercice-intense" />
          <Picker.Item label="Très actif" value="très-actif" />
        </Picker>
        <Picker
          style={styles.input}
          selectedValue={healthGoal}
          onValueChange={setHealthGoal}
        >
          <Picker.Item label="Perte de poids" value="perte-de-poids" />
          <Picker.Item label="Maintien du poids" value="maintien-du-poids" />
          <Picker.Item label="Prise de poids" value="prise-de-poids" />
        </Picker>
        <Button title="Valider" onPress={validForm} color="#2A628F" />
      </View>
      {displayCaloricNeed && (
      <View style={styles.result}>
        <Text style={styles.text}>Votre besoin calorique journalier : </Text>
        <Text style={styles.text}>{caloricNeed} kcal/jour </Text>
      </View>
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  formulaire: {
    flex: 0.5,
  },
  result: {
    flex: 0.5,
    marginTop:100,
  },
  text:{
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
     backgroundColor: '#fff',
  },
  banderole:{
    background: '#16324F',
    text: '#ffffff',
  }
});


export default HealthGoals;
