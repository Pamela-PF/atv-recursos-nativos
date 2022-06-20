import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaDeContatos from '../telas/ListaDeContatos';
import NovoContato from '../telas/NovoContato';
import { HeaderButton, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';


const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='ListaDeContatos'>
            <Stack.Screen 
            name="ListaDeContatos" 
            component={ListaDeContatos}
            options={(props) => ({
                headerRight: () => <HeaderButton
                HeaderButtonComponent={BotaoCabecalho}>
                    <Item
                        title="Adicionar"
                        iconName='md-add'
                        onPress={()=>{
                            console.log("Chamou")
                            props.navigation.navigate('NovoContato')
                        }}
                    />
                </HeaderButton>
            })}
            />
            <Stack.Screen name="NovoContato" component={NovoContato}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container