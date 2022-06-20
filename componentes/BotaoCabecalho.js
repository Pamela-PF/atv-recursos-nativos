import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const BotaoCabecalho = (props) => {
    <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={'black'}
    />
}