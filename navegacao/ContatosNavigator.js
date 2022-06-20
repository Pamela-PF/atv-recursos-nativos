import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaDeContatos from '../telas/ListaDeContatos';
import NovoContato from '../telas/NovoContato';

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='ListaDeContatos'>
            <Stack.Screen name="ListaDeContatos" component={ListaDeContatos}/>
            <Stack.Screen name="NovoContato" component={NovoContato}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container