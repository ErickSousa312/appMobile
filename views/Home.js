import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import {css} from '../assets/css/Css';

export default function Home(props) {
    console.log(props);
  return (
    <View style={css.conainer2}>
      <TouchableOpacity style={css.button__home}
            onPress={()=>props.navigation.navigate('Login',{
                id: 30
            })}
      >
          <Image source={require('../assets/img/ButtonLogin.png')}/>
      </TouchableOpacity>

      <TouchableOpacity style={css.button__home2}
            onPress={()=>props.navigation.navigate('Rastreio',{
                id: 30
            })}
      >
          <Image source={require('../assets/img/ButtonRastreio.png')}/>
      </TouchableOpacity>

    </View>
  );
}