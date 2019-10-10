import React from 'react';

import { View } from 'react-native';
import { Text } from 'react-native-elements';


export function MainApp() {
    return <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Text h1 style={{textAlign: 'center'}}>
            Welcome to my android application
        </Text>
    </View>;
}
