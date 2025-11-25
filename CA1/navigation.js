import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, createStackNavigator} from '@react-navigation/native-stack';
import Calculator from './Calculator.js';
import Add from './Add.js';
import Edit from './Edit.js';



const Stack =  createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Calculator} />
                <Stack.Screen name="Add" component={Add} />
                <Stack.Screen name="Edit" component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;