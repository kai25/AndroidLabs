import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    btn: {
        height: 100,
        marginLeft: 80,
        marginRight: 80,
        backgroundColor: 'green'
    },
    title: {
        fontSize: 26,
        marginLeft: 10
    }
});


export function StyledLayout() {
    return <View style={styles.container}>
        <Button
            icon={
                <Icon
                    name='android'
                    size={50}
                    color='white'
                />
            }
            title={'New Button'}
            titleStyle={ styles.title }
            buttonStyle={ styles.btn }
        />
    </View>
}
