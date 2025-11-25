import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, createStackNavigator} from '@react-navigation/native-stack';
import calculator from './calculator.js';
import add from './add.js';



const Stack =  createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={calculator} />
                <Stack.Screen name="Add" component={add} />
                <Stack.Screen name="Edit" component={edit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;