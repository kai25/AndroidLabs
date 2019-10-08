import React from 'react';

import {Header} from 'react-native-elements';


export function TopBar(props) {
    return (
        <Header
            containerStyle={{ height: 70, marginTop: -30 }}
            leftComponent={{ icon: 'menu', color: '#fff', onPress: props.onMenuPress }}
            centerComponent={{ text: 'SMOS Labs', style: { color: '#fff' } }}
        />
    );
}

