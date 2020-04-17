import React from 'react'
import { TextInput } from 'react-native'
import styles from '../styles/insertClass'
import Botao from './Botao'
export default function InsertClass() {
    return (
      <>
          <TextInput
           style={styles.TexInput}
           placeholder="Insira sua aula aqui" 
           placeholderTextColor={'white'}
          />
          <Botao/>
      </>
 
    );
}
 