import React from 'react';

import { Animated, Text, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import { getScreenResolution } from '../utils';

const OPEN_ANIMATION_DURATION = 250;

const styles = StyleSheet.create({
    sideMenuView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#7DCEA0',
    },
});



function getSizeAndOffset(screenResolution, offset) {
    return {
        height: screenResolution.height,
        width: screenResolution.width,
        left: offset,
    };
}

export function SideMenu(props) {
    const screenResolution = getScreenResolution();

    const [openAnim] = React.useState(new Animated.Value(-screenResolution.width));


    React.useEffect(() => {
        Animated.timing(
            openAnim,
            {
                duration: OPEN_ANIMATION_DURATION,
                toValue: 0,
            }
        ).start();
    }, []);

    const onSwipeLeft = () => {
        Animated.timing(
            openAnim,
            {
                duration: OPEN_ANIMATION_DURATION,
                toValue: -screenResolution.width,
            }
        ).start(() => props.onClose());
    };

    return (<Animated.View
        style={[styles.sideMenuView, getSizeAndOffset(screenResolution, openAnim)]}
        on
    >
        <GestureRecognizer
            onSwipeLeft={onSwipeLeft}
            style={{ flex: 1, backgroundColor: 'red' }}
            config={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80
            }}
        >
            <Text style={{ color: 'white' }}>
                SideMenu
            </Text>
        </GestureRecognizer>
    </Animated.View>);
}
