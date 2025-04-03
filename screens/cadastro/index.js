import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';

export default function Cadastro({ navigation }) {
    return (
        <View style={styles.container}>
                <Text style={styles.logoText}>Habitx</Text>

                <View style={styles.forms}>
                    <Text style={styles.title}>Criar Conta</Text>
                    <TextInput style={styles.input} placeholder='Nome Completo' placeholderTextColor="#0241A0" />
                    <TextInput style={styles.input} placeholder='Usuário' placeholderTextColor="#0241A0" />
                    <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#0241A0" keyboardType="email-address" />
                    <TextInput style={styles.input} placeholder='Senha' placeholderTextColor="#0241A0" secureTextEntry />
                    <TextInput style={styles.input} placeholder='Confirmar Senha' placeholderTextColor="#0241A0" secureTextEntry />

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.createAccount}>Já tem uma conta? Faça login</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}
