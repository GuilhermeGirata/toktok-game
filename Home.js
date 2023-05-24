import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const Home = ({ navigation }) => {
    const [textoInput, setTextoInput] = useState('');

    const irParaJogo = () => {
        setTextoInput('');
        navigation.navigate('Jogo', { nome: textoInput });
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>BEM-VINDO!</Text>
            <Text style={styles.text}>Digite seu nome</Text>
            <TextInput
                style={styles.input}
                value={textoInput}
                onChangeText={setTextoInput}
            />
            <Button
                title="INICIAR"
                onPress={irParaJogo}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
    },
    text: {
        fontSize: 20,
    },
    input: {
        height: 40,
        width: 220,
        margin: 15,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 20
    },
    button: {
        width: 220,
        borderRadius: 10
    }
});
