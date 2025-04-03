import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { updateHabit } from '../api';

export default function EditHabit({ route, navigation }) {
  const { habit } = route.params;
  const [title, setTitle] = useState(habit.title);
  const [description, setDescription] = useState(habit.description);

  const handleSave = async () => {
    await updateHabit(habit.id, { title, description });
    navigation.goBack(); // Volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Editar Hábito</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Título do hábito"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Descrição do hábito"
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
