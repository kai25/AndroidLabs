import React from 'react';
import { SafeAreaView } from 'react-native';

import { TopBar } from './components/topBar';
import { SideMenu } from './components/sideMenu';
import { ActivitiesApp } from './components/apps/activities';
import { MainApp } from './components/mainApp';
import { LayoutsApp } from './components/apps/layouts';

const APPS = {
  MAIN_APP: 'MAIN_APP',
  ACTIVITIES_APP: 'ACTIVITIES_APP',
  LAYOUTS_APP: 'LAYOUTS_APP',
};

const APPS_ROUTING = {
  [APPS.MAIN_APP]: MainApp,
  [APPS.ACTIVITIES_APP]: ActivitiesApp,
  [APPS.LAYOUTS_APP]: LayoutsApp,
};

const MENU_OPTIONS = [
    { title: 'Main App', id: APPS.MAIN_APP},
    { title: 'LabWork 1. Activities', id: APPS.ACTIVITIES_APP},
    { title: 'LabWork 2. Layouts', id: APPS.LAYOUTS_APP},
];

const App: () => node = () => {
    const [ isMenuOpened, setMenuOpened ] = React.useState(false);
    const [ currentApp, setCurrentApp ] = React.useState(APPS.MAIN_APP);
    const CurrentAppComponent = APPS_ROUTING[currentApp];

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <TopBar onMenuPress={() => setMenuOpened(!isMenuOpened)} />
                <CurrentAppComponent />
                { isMenuOpened ?
                    <SideMenu
                        onClose={() => setMenuOpened(false)}
                        options={MENU_OPTIONS}
                        onOptionChoose={(id) => {
                            setCurrentApp(id);
                            setMenuOpened(false);
                        }}
                    />
                    : null
                }
            </SafeAreaView>
        </>
    );
};

export default App;
