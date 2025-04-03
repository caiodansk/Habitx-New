import {View, Text, TextInput, Button} from 'react-native'
import styles from './style'

export default function Login({ navigation }){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.logoText}>Habitx</Text>
            </View>

            <View style={styles.forms}>
                <Text style={styles.title}>Tela de Login</Text>
                <TextInput style={styles.input} placeholder='Usuário' />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>

                <Button title='Login' style={styles.button} onPress={() => navigation.navigate('Home')}/>

                <Text style={styles.createAccount} onPress={() => navigation.navigate('Cadastro')}>Criar conta</Text>
            </View>
        </View>
    );
}