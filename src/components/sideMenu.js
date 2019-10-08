import React from 'react';

import { Animated, Text, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import { Button } from 'react-native-elements';

import { getScreenResolution } from '../utils';

const OPEN_ANIMATION_DURATION = 250;

const styles = StyleSheet.create({
    sideMenuView: {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        backgroundColor: 'lightblue',
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
            onSwipe={onSwipeLeft}
            style={{ flex: 1, backgroundColor: 'lightblue' }}
            config={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80
            }}
        >
            <Button
                title="LabWork 1. Activities"
                type="clear"
            />
            <Button
                title="LabWork 2. Layout"
                type="clear"
            />
            <Button
                title="LabWork 3. Database"
                type="clear"
            />
        </GestureRecognizer>
    </Animated.View>);
}
