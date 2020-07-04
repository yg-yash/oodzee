import React, {useEffect, useState} from 'react';
import AppIntro from './src/Components/AppIntro/AppIntro';
import MainNavigator from './src/navigators/MainNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import createStore from './src/store';
import SplashScreen from 'react-native-splash-screen';
import {Platform, StatusBar} from 'react-native';
const {store, persistor} = createStore();

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {showRealApp ? (
          <MainNavigator />
        ) : (
          <AppIntro setShowRealApp={setShowRealApp} />
        )}
      </PersistGate>
    </Provider>
  );
}
