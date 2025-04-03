import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import styles from './style'

export default function Home({ navigation }){
    return(
        <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Habitx</Text>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('Detalhes')}
        >
          <Text style={styles.squareText}>Hábito da Manhã</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Card')}
      >
        <Text style={styles.addButtonText}>Adicionar Card</Text>
      </TouchableOpacity>
    </View>
    );
}
