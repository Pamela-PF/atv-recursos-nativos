import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const ListaDeContatos = () => {
    return(
        <View>
            <Text>Lista de Contatos</Text>
        </View>
    )
}

export default ListaDeContatos

const styles = StyleSheet.create({
    telaPrincipalView: {
      padding: 40,
      backgroundColor: '#F0E68C',
    },
    itemNaLista: {
      padding: 12,
      backgroundColor: '#C0C0C0',
      borderColor: '#808080',
      borderWidth: 1,
      borderRadius: 8,
      marginTop:8
    },
    textoTitulo: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 12
    }
});