import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3F2FD', // Azul claro de fundo
        paddingHorizontal: 20,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.9, // Leve transparência para realçar os elementos em primeiro plano
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Leve escurecimento para melhor contraste
    },
    logoContainer: {
        backgroundColor: '#005BE3',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 25,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    logoText: {
        textTransform: 'uppercase',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
        letterSpacing: 2,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)', // Efeito vidro (glassmorphism)
        width: '100%',
        height: 50,
        borderColor: '#0288D1',
        borderWidth: 1.5,
        borderRadius: 12,
        marginBottom: 18,
        paddingLeft: 15,
        fontSize: 16,
        color: '#333',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    button: {
        width: '100%',
        backgroundColor: '#0046A0',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
        opacity: 0.9,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFF',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    groupBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
    },
});
