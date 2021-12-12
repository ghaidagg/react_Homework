import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function AppButton(props) {
    const { title, onPress, color = "primary" } = props;
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10

    },
    text: {
        color: colors.black,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})