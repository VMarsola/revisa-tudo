import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../styles/botao'

export default function InsertClass() {
    return (
      <>
        <TouchableOpacity >
            <View style={styles.botao}>
                <Text style={styles.TxtBotao}>enviar</Text>
            </View>
        </TouchableOpacity>
      </>
    )
}  