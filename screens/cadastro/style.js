import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(2, 65, 160, 0.8)', // Azul semi-transparente para contraste
    },
    logoText: {
        textTransform: 'uppercase',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF', // Mantém visível sobre o fundo azul
    },
    forms: {
        width: '90%',
        padding: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparência leve para realçar os campos
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFF',
    },
    input: {
        backgroundColor: '#E0EFFF', // Azul claro para os inputs
        width: '100%',
        height: 45,
        borderColor: '#0241A0', // Azul escuro para bordas
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft: 12,
        fontSize: 16,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#0241A0', // Azul escuro para botões
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginRedirect: {
        marginTop: 20,
        color: '#1E90FF', // Azul vibrante para links
        textDecorationLine: 'underline',
        fontSize: 14,
    },
});
