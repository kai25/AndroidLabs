import React from 'react';

import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const TEXT_COLOR = '#fff';

const styles = StyleSheet.create({
    containerStyle: {
        height: 70,
        marginTop: -30,
    },
});


export function TopBar(props) {
    return (
        <Header
            containerStyle={ styles.containerStyle }
            leftComponent={{ icon: 'menu', color: TEXT_COLOR, onPress: props.onMenuPress }}
            centerComponent={{ text: 'SMOS Labs', style: { color: TEXT_COLOR } }}
        />
    );
}

