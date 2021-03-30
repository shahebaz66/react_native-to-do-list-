
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,FlatList,TextInput } from 'react-native';
import Input from './components/Input';
import ListItem from './components/List'
export default function App() {
  
  var [items,setItems]=useState([]);
  var [showModal,setShowModal]=useState(false);

  const addItems=(current)=>{
    if(current != ''){
    setItems([...items,{key:Math.random().toString(),data:current}]);
    setShowModal(false)
    }
  }
  const deleteItem=(item)=>{
    var a=[...items].filter(i=>i.key!=item)
    setItems(a)
  }
  const cancel=()=>{
    setShowModal(false)
  }
  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={()=>setShowModal(true)}/>
      <Input cancel={cancel} visible={showModal} addItems={addItems}/>
      <FlatList 
      keyExtractor={(item,index)=>item.key}
      data={items} renderItem={value=>{
        return <ListItem delete={deleteItem} itemkey={value.item.key} data={value.item.data} />
      }}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    padding:30,
    marginBottom:30
    
  },
  
  
});
