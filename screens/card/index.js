import {View, Text, TextInput, Button} from 'react-native'
import styles from './style';

export default function Card({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Habitx</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Criar card</Text>

                <TextInput style={styles.input} placeholder='Título do card' />


                <View style={styles.groupBtn}> 
                <Button title='Salvar' style={styles.button} onPress={() => navigation.navigate('Home')} />
                <Button title='Cancelar' onPress={() => navigation.navigate('Home')} />
                </View>
                
            </View>
        </View>
    );
}