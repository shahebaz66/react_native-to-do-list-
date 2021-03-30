import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const list=(props)=>{
    return (
        <TouchableOpacity onPress={()=>props.delete(props.itemkey)}>
        <View style={styles.listItem}>
          <Text>{props.data}</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem:{
        backgroundColor:'#ccc',
        padding:10,
        marginVertical:5,
        borderRadius:20
      }
})
export default list