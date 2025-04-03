import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(2, 65, 160, 0.8)', // Azul moderno e limpo
        padding: 20,
    },
    logoText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'uppercase',
        marginBottom: 20,
    },
    gridContainer: {
        width: '100%',
        alignItems: 'flex-start', // Alinha os cards à esquerda
        paddingHorizontal: 20,
    },
    square: {
        width: 140,
        height: 140,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    squareText: {
        color: '#0366d6',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addButton: {
        marginTop: 20,
        backgroundColor: '#0256b3',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
