import React, {useState,useEffect} from 'react';
import {Text, View, Button, FlatList, TouchableOpacity} from 'react-native';
import { AsyncStorage } from 'react-native';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import { css } from '../../assets/css/Css';
import FindAll from './FindAll';

export default function Edicao({navigation}) {

    
    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Pesquisa' navigation={navigation} />
            <View style={{width:'100%', height:'100%',backgroundColor:'white'}}>
 
                        <TouchableOpacity style={css.login__button__pesquisa} onPress={()=>navigation.navigate(FindAll)}>
                            <Text style={css.login__buttonText__pesquisa}>Todos os cadastros</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css.login__button__pesquisa2} onPress={()=>sendForm()}>
                            <Text style={css.login__buttonText__pesquisa}>Pesquisa condicional</Text>
                        </TouchableOpacity>

            </View>
        </View>
    );
}