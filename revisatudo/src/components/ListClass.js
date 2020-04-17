import React from 'react';
import styles from '../styles/listClass'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import api from '../services/api'

export default function ListClass() {
  state = {
    data: [
      { id: 0, full_name: 'Fis A - aula 9' },
      { id: 1, full_name: 'Geog G - aula 10' },
      { id: 2, full_name: 'Int Txt - aula 19' },
      { id: 3, full_name: 'Int Txt - aula 19' },
      { id: 4, full_name: 'Int Txt - aula 19' },
      { id: 5, full_name: 'Int Txt - aula 19' },
      { id: 6, full_name: 'Int Txt - aula 19' },
      { id: 7, full_name: 'Int Txt - aula 19' },
      { id: 8, full_name: 'Int Txt - aula 19' },
    ],
  };
  const columns = 2;

  function createRows (data, columns) {
    const linhas= Math.floor(data.length / columns)
    let lastRowElements = data.length - linhas * columns
  
    while(lastRowElements !== columns) {
      data.push({
        id:`empty-${lastRowElements}`,
        name:`empty-${lastRowElements}`,
        empty: true
      })
      lastRowElements += 1
    }
    return data
  }

  renderItem = ({ item }) =>{
    
    if (item.empty) {
      return <View style={[styles.itemClass, styles.itemEmpty]}></View>
    }
    return (
      <View style={styles.itemClass}>
        <Text style={styles.textItem}>{item.full_name}</Text>
      </View>
    )
  }
  
    return (
      <>
        <Text style={styles.titleClass}>Revisar</Text>
        <FlatList
        data={createRows(this.state.data, columns)}
        numColumns={columns}
        showsVerticalScrollIndicator={true}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
        />
      </>
    );
}