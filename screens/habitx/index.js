import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createHabit } from '../../api';  
import styles from './style';

export default function Habitx({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    try {
      const response = await createHabit({ title, description });
      console.log('Resposta da API:', response);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao salvar hábito:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Habitx</Text>
      <Text style={styles.title}>Criar um hábito</Text>

      <TextInput 
        style={styles.input} 
        placeholder='Título' 
        value={title} 
        onChangeText={setTitle} 
      />

      <TextInput 
        style={styles.input} 
        placeholder='Descrição' 
        value={description} 
        onChangeText={setDescription} 
      />

      <View style={styles.groupBtn}>  
      <Button title='Salvar' onPress={handleSave} />
      <Button title='Cancelar' onPress={() => navigation.navigate('Detalhes')} />
              </View>

      
    </View>
  );
}
