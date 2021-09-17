import React, {useState,useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {css} from '../../assets/css/Css';
import { AsyncStorage } from 'react-native';

import Cadastro from './Cadastro';
import Edicao from './Edicao';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ButtonNew, { ButtonPlus } from '../../Buttons/ButtonPlus';

export default function AreaRestrita() {

    const Tab = createBottomTabNavigator();
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
        <Tab.Navigator
            screenOption={{
                tabBarBadgeStyle:{
                    background:'black',
                },
                activeColor:'white',
                inactiveColor:'black',

                tabStyle:{
                    paddingBottom:5,
                    paddingTop:5,
                    background:"black"
                }

            }}
        >
            <Tab.Screen                   
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown:false,
                        tabBarActiveBackgroundColor:'black',
                        tabBarInactiveBackgroundColor:'black',
                    tabBarIcon:({color})=>(
                        <Icon name="user" size={25} color ={color}/>
                    )
                }}
            />
            <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        headerShown:false,
                        tabBarActiveBackgroundColor:'black',
                        tabBarInactiveBackgroundColor:'black',
                    tabBarLabel:'',
                    tabBarIcon:()=>(
                        <ButtonNew></ButtonNew>
                    )
                }}
            />
            <Tab.Screen    
                    name="Pesquisa"
                    component={Edicao}
                    options={{
                        headerShown:false,
                        tabBarActiveBackgroundColor:'black',
                        tabBarInactiveBackgroundColor:'black',
                        
                    tabBarIcon:({color})=>(
                        <Icon name="search" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}