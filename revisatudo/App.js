import React from 'react';
import {
  Text, View,
} from 'react-native';
import styles from './src/styles/app'

//components
import Header from './src/components/Header'
import InsertClass from './src/components/InsertClass'
import ListClass from './src/components/ListClass'

export default function app() {
  return (
    <View style={styles.app}> 
      <Header/>
      <InsertClass/>
      <ListClass/>
    </View>
  );
};


