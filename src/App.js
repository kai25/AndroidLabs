import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { TopBar } from './components/topBar';

const App: () => node = () => {
  return (
    <>
      <SafeAreaView>
        <TopBar />
      </SafeAreaView>
    </>
  );
};

export default App;
