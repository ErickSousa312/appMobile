import React, {useState,useEffect} from 'react';
import {Text, View, Button, FlatList, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';
import { AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import { css } from '../../assets/css/Css';


export default function FindAll({navigation}) {

    const [json,setJson]=useState(null);

    useEffect(()=>{
        sendForm();
    },[]);


    //Envio do formulário
    async function sendForm()
    {
        const response=await fetch('http://192.168.0.104:3000/read',{
            method: 'POST',
            headers: {
                 Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        setJson( await response.json());
        console.log(json)
    }
    
   
    return (
    <SafeAreaView >
      <FlatList
        data={json}
        keyExtractor={item=>item.name}
        renderItem={({item})=> <Text style={styles.item}>{item.name}</Text>}
      />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#3eecf5',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      color:'black'
    },
    title: {
      fontSize: 32,
    },
  });