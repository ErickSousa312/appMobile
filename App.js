// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Rastreio, AreaRestrita} from './views';
import FindAll from './views/arearestrita/FindAll';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
              name="Home"
              component={Home}
              options={{
              title:"Bem Vindo",
              headerStyle:{backgroundColor: "#333"},
              headerTintColor:'white',
              headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
            }}
         />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        <Stack.Screen name="AreaRestrita" options={{headerShown:false}} component={AreaRestrita}/>
        <Stack.Screen name="FindAll" component={FindAll}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;