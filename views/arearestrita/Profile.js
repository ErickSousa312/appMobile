import React, {useState,useEffect} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import { AsyncStorage } from 'react-native';
import { css } from '../../assets/css/Css';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';

export default function Profile({navigation}) {
    const [user,setUser]=useState(null);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);


    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />

            <View style={[ css.conainer2]}>
                <Text>Bem Vindo {user}</Text>
            </View>
        </View>
    );
}