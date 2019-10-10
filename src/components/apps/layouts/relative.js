import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const GAP_SIZE = 10;
const BTN_HEIGHT = 50;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: GAP_SIZE,
        paddingBottom: GAP_SIZE,
    },
    btn: {
        flex: 1,
    },
    btnWrapper: {
        flex: 1,
        marginLeft: GAP_SIZE,
    },
    midBtn: {
    },
    btnContainer: {
        height: BTN_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingRight: GAP_SIZE,
    }
});


export function RelativeLayout() {
    return <View style={styles.container}>
        <View style={styles.btnContainer}>
            <Button
                title={'Button 1'}
                buttonStyle={ styles.btn }
                containerStyle={ styles.btnWrapper }
            />
            <Button
                title={'Button 2'}
                buttonStyle={ styles.btn }
                containerStyle={ styles.btnWrapper }
            />
        </View>
        <View style={[styles.btnContainer, { alignItems: 'center', paddingLeft: 50, paddingRight: 50 }]}>
            <Button
                title={'Button 4'}
                buttonStyle={ [styles.btn, styles.midBtn] }
                containerStyle={ styles.btnWrapper }
            />
            <Button
                title={'Button 5'}
                buttonStyle={ [styles.btn, styles.midBtn] }
                containerStyle={ styles.btnWrapper }
            />
            <Button
                title={'Button 5'}
                buttonStyle={ [styles.btn, styles.midBtn] }
                containerStyle={ styles.btnWrapper }
            />
        </View>
        <View style={[styles.btnContainer, { alignItems: 'flex-end' }]}>
            <Button
                title={'Button 6'}
                buttonStyle={ styles.btn }
                containerStyle={ styles.btnWrapper }
            />
        </View>
    </View>
}
