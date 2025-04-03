import axios from 'axios';

const API_URL = 'http://10.0.2.2:3000/items';


export const getHabits = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar hábitos:', error);
    return [];
  }
};

export const createHabit = async (habit) => {
  try {
    const response = await axios.post(API_URL, habit);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar hábito:', error);
    return null;
  }
};

export const deleteHabit = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Erro ao deletar hábito:', error);
  }
};

export const updateHabit = async (id, habit) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, habit);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar hábito:', error);
    return null;
  }
};
