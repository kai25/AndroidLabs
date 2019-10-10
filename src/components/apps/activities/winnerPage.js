import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    goBackBtn: {
        flex: 1,
    }
});

export function WinnerPage(props) {
    return <View style={styles.container}>
        <Text h1 style={styles.text}>
            You won! It was {props.number}
        </Text>
        <Button
            title={'One more time'}
            style={styles.goBackBtn}
            onPress={props.onRetryClick}
        />
    </View>
}
