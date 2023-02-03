import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const splashScreenHide = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      splashScreenHide();
    }, 3000)
  }, [])

  return (
    <>
      <StatusBar style="auto" hidden />
      <Home />
    </>
  )

}
