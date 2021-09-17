import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function Rastreio(props) {
  return (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Componente Rastreio</Text>
      <Button 
            title ='Ir para Login'
            onPress ={()=>props.navigation.navigate('Login',{
                id: 30

            })}/>
    </TouchableOpacity>
  );
}