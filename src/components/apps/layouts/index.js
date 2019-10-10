import React from 'react';

import { View, StyleSheet, BackHandler } from 'react-native';
import { Button } from 'react-native-elements';

import { LinearLayout } from './linear';
import { StyledLayout } from './styled';
import { RelativeLayout } from './relative';


const DEFAULT = 'DEFAULT';
const LINEAR = 'LINEAR';
const RELATIVE = 'RELATIVE';
const STYLED = 'STYLED';

const BTN_HEIGHT = 130;
const SIDE_MARGIN = 25;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    btn: {
        height: BTN_HEIGHT,
        marginLeft: SIDE_MARGIN,
        marginRight: SIDE_MARGIN,
    },
});


function StartLayout(props) {
    return <View style={styles.container}>
        <Button
            buttonStyle={styles.btn}
            title={'Linear Layout'}
            onPress={() => props.onLayoutChoose(LINEAR)}
        />
        <Button
            buttonStyle={styles.btn}
            title={'Relative Layout'}
            onPress={() => props.onLayoutChoose(RELATIVE)}
        />
        <Button
            buttonStyle={styles.btn}
            title={'Styled Layout'}
            onPress={() => props.onLayoutChoose(STYLED)}
        />
        <Button
            buttonStyle={styles.btn}
            title={'Exit'}
            onPress={props.onExit}
        />
    </View>
}

const LAYOUTS_BINDINGS = {
    [LINEAR]: LinearLayout,
    [RELATIVE]: RelativeLayout,
    [STYLED]: StyledLayout,
};

export function LayoutsApp() {
    const [ currentLayout, setLayout ] = React.useState(DEFAULT);
    const isDefaultLayout = currentLayout === DEFAULT;

    const onExit = () => BackHandler.exitApp();
    const CurrentLayout = isDefaultLayout ? null : LAYOUTS_BINDINGS[currentLayout];

    return <View style={styles.container}>
        { isDefaultLayout ?
            <StartLayout
                onLayoutChoose={(layout) => setLayout(layout)}
                onExit={onExit}
            />
            : <CurrentLayout />
        }
    </View>
}
