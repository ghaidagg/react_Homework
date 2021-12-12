import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import Constants from 'expo-constants'

export default function Screen(props) {
    return (
        <SafeAreaView style={[styles.screen, props.style]}>
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }

})