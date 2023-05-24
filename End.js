import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const End = ({ route, navigation }) => {
    const { nome, contador } = route.params;

    const Reiniciar = () => {
        navigation.navigate('Jogo', { nome });
    };

    const Encerrar = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Fim de jogo {nome}!</Text>
            <Text style={styles.text}>Sua pontuação foi: {contador}</Text>
            <View style={styles.botoes}>
                <Button
                    title="REINICIAR"
                    onPress={Reiniciar}
                />
                <View style={styles.space} />
                <Button
                    title="ENCERRAR"
                    onPress={Encerrar}
                />
            </View>
        </View>
    );
};

export default End;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
    },
    text: {
        fontSize: 20,
        paddingBottom: 20
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
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    }
});

