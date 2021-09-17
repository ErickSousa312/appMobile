import React, {useState,useEffect} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View , Text} from 'react-native';
import {StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ButtonNew(){
    return(

        <View style={styles.container}>
            <Icon name="plus" size={26} color ='white'/>
        </View>

    );
}


const styles = StyleSheet.create({

    container:{
        width:70,
        height:70,
        borderRadius: 30,
        backgroundColor: '#3eecf5',
        alignItems:"center",
        justifyContent: 'center',
        marginBottom: 15
    }

})