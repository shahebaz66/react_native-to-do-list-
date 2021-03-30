import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,FlatList,TextInput,Modal } from 'react-native';

const input=(props)=>{
    var [current,setCurrent]=useState('');
    const changeHandlers=(change)=>{
        setCurrent(change)
      }
    return(
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            value={current}
            placeholder="Enter your goals"
            onChangeText={changeHandlers}/>
            <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title='Add' onPress={()=>{props.addItems(current);setCurrent('')}} />
            </View>
            <View style={styles.button}>
            <Button title='cancel' color='red' onPress={()=>props.cancel()}/>
            </View>
            </View>
            
            
        </View>
      </Modal>
    )
}
const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'60%'
  },
  button:{
    width:'40%'
  },
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
    input:{
        padding:10,
        width:'80%',
        borderBottomWidth:2,
        marginVertical:5
      },
})
export default input