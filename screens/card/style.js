import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    logoContainer: {
        backgroundColor: '#005BE3',
    },
    logoText: {
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 30
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingLeft: 10,
    },

    groupBtn: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
    button: {
        marginTop: 15,
    },
});
