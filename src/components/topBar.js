import React, { useState, useEffect } from 'react';

import { View } from 'react-native';

import { SideMenu } from './sideMenu';


export function TopBar() {
    return (
        <View>
            <SideMenu onClose={() => {}}/>
        </View>
    );
}

