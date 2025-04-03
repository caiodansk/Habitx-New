import { useEffect, useState, useCallback } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getHabits, deleteHabit, updateHabitStatus } from '../../api';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';

export default function Detalhes({ navigation }) {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const data = await getHabits();
    console.log("Hábitos carregados:", data); // Verifica se os hábitos estão vindo corretamente
    setHabits(data);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchHabits();
    }, [])
  );

  const handleDelete = async (id) => {
    await deleteHabit(id);
    fetchHabits();
  };

  const toggleHabitStatus = async (id, currentStatus) => {
    console.log(`Alterando hábito ${id} para`, !currentStatus); // Log para verificar mudança
    await updateHabitStatus(id, !currentStatus);

    // Atualiza localmente a lista de hábitos para refletir a mudança instantânea
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !currentStatus } : habit
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Habitx</Text>
      </View>
      <View style={styles.contentContainer}>
        {habits.length > 0 ? (
          habits.map((habit) => (
            <View key={habit.id} style={styles.cardContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{habit.title}</Text>
              </View>
              <View style={styles.iconContainer}>
                {/* Ícone de check para marcar como concluído */}
                <TouchableOpacity onPress={() => toggleHabitStatus(habit.id, habit.completed)}>
                  <Icon 
                    name={habit.completed ? 'check-circle' : 'circle'} 
                    size={28} 
                    color={habit.completed ? '#32CD32' : '#aaa'} // Verde quando concluído
                  />
                </TouchableOpacity>
                {/* Ícone de edição */}
                <TouchableOpacity onPress={() => navigation.navigate('EditHabit', { habit })}>
                  <Icon name="edit" size={24} color="#000" />
                </TouchableOpacity>
                {/* Ícone de exclusão */}
                <TouchableOpacity onPress={() => handleDelete(habit.id)}>
                  <Icon name="trash-2" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum hábito cadastrado ainda.</Text>
            <Text style={styles.emptySubText}>Comece adicionando seu primeiro hábito!</Text>
          </View>
        )}

        <View style={styles.groupBtn}>  
        <Button title='Adicionar hábito' style={styles.button} onPress={() => navigation.navigate('Habitx')} />
        <Button title='Voltar' style={styles.button} onPress={() => navigation.navigate('Home')} />
        </View>
        
      </View>
    </View>
  );
}
