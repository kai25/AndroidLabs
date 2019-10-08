import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { TopBar } from './components/topBar';
import {SideMenu} from "./components/sideMenu";

const App: () => node = () => {
    const [ isMenuOpened, setMenuOpened ] = React.useState(false);
    return (
        <>
            <SafeAreaView>
                <TopBar onMenuPress={() => setMenuOpened(!isMenuOpened)} />
                { isMenuOpened ? <SideMenu onClose={() => setMenuOpened(false)}/> : null }
            </SafeAreaView>
        </>
    );
};

export default App;
