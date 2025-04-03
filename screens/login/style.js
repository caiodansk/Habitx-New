import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(2, 65, 160, 0.8)', // Azul semi-transparente para contraste
    },
    logoText: {
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF', // Mantém visível sobre o fundo azul
    },
    forms: {
        width: '90%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparência leve para realçar os campos
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFF',
    },
    input: {
        backgroundColor: '#E0EFFF', // Azul claro para os inputs
        width: '100%',
        height: 40,
        borderColor: '#0241A0', // Azul escuro para bordas
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingLeft: 10,
    },
    forgotPassword: {
        color: '#fFF', // Azul vibrante para links
        textDecorationLine: 'underline',
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#0241A0', // Azul escuro para botões
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    createAccount: {
        marginTop: 20,
        color: '#fff', // Azul vibrante para links
        textDecorationLine: 'underline',
    },
});
