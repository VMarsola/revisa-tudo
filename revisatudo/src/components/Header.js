import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/header'

export default function Header() {
 
    var day = new Date().getDate();
     
    const monthNames = ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Aug", "Set", "Out", "No", "Dez"];
    var d = new Date();
    var month = monthNames[d.getMonth()]
    var year = new Date().getFullYear();
    var date = (day  +'  '+ month +'  '+ year);

 
    return (
   
      <View >
          <Text style={styles.header}>{date}</Text>
      </View>
 
    );
}
 