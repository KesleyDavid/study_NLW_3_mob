import React from 'react';
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import mapMarker from '../images/map-marker.png';

import * as S from './OrphanagesMapStyles';

export default function OrphanagesMap() {
  const [ fontsLoaded ] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });
  // nunito700: Nunito_700Bold, => utilizar nunito700

  if (!fontsLoaded) {
    return null;
  }

  return (
    <S.Container>
      <S.MapViewMain 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -16.649719,
          longitude: -49.325404,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -16.649719,
            longitude: -49.325404,
          }}
        >
          <Callout tooltip onPress={() => {}}>
            <S.CalloutContainer>
              <S.CalloutText fontFamily='Nunito_700Bold'>Texto texto texto</S.CalloutText>
            </S.CalloutContainer>
          </Callout>
        </Marker>
      </S.MapViewMain>
      <S.Footer>
        <S.FooterText fontFamily='Nunito_700Bold'>
          x orfanatos encontrados
        </S.FooterText>
        <S.FooterButton onPress={() => {}}>
          <Feather name="plus" size={20} color="#FFF" />
        </S.FooterButton>
      </S.Footer>
    </S.Container>
  );
}

