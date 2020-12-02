import React from 'react';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { Bangers_400Regular } from '@expo-google-fonts/bangers';

import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Bangers_400Regular,
  });
  // nunito700: Nunito_700Bold, => utilizar nunito700

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  );
}

