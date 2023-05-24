import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Jogo = ({ route, navigation }) => {
    const [contador, setContador] = useState(0);
    const [countdown, setCountdown] = useState(15);
    const [posicaoX, setPosicaoX] = useState(0);
    const [posicaoY, setPosicaoY] = useState(0);
    const { nome } = route.params;

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(timer);
            setCountdown(15);
            setContador(0);
            navigation.navigate('End', { nome, contador });
        }

        return () => clearInterval(timer);
    }, [countdown, navigation]);

    useEffect(() => {
        const novaPosicaoX = Math.random() * 300;
        const novaPosicaoY = Math.random() * 500;
        setPosicaoX(novaPosicaoX);
        setPosicaoY(novaPosicaoY);
        const timer = setInterval(() => {
            const novaPosicaoX = Math.random() * 300;
            const novaPosicaoY = Math.random() * 600;
            setPosicaoX(novaPosicaoX);
            setPosicaoY(novaPosicaoY);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const buttonPress = () => {
        setContador(contador + 1);
        const novaPosicaoX = Math.random() * 300;
        const novaPosicaoY = Math.random() * 600;
        setPosicaoX(novaPosicaoX);
        setPosicaoY(novaPosicaoY);
    }

    return (
        <View style={{ justifyContent: 'space-between' }}>
            <View style={styles.topbar}>
                <Text style={styles.countdown}>Tempo Restante: {countdown}</Text>
                <Text style={styles.contador}>Pontos: {contador}</Text>
            </View>
            <TouchableOpacity
                onPress={buttonPress}
                style={[styles.bola, { left: posicaoX, top: posicaoY }]}
            />
        </View>
    );
};

export default Jogo;

const styles = StyleSheet.create({
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    countdown: {
        fontSize: 20,
        paddingLeft: 20
    },
    contador: {
        fontSize: 20,
        paddingRight: 30,
    },
    bola: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'red',
        position: 'absolute',
    },
});