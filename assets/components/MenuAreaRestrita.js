import React, {useState,useEffect} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import { AsyncStorage } from 'react-native';
import { css } from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../../views/Home'
import Login from '../../views/Login'

export default function MenuAreaRestrita(props) {

    async function logout()
    {
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }

    return (
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home2} onPress={()=>props.navigation.navigate(Home)}>
                <Icon name="home" size={30} color="#999"  />
            </TouchableOpacity>

            <Text style={css.area__title} >{props.title}</Text>

            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <Icon name="sign-out" size={30} color="#999" />
            </TouchableOpacity>
        </View>
    );
}