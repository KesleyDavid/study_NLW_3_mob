import React from 'react';
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import mapMarkerImg from '../../images/map-marker.png';

import * as S from './styled';

export default function OrphanagesMap() {
  
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails');
  }

  function handleNavigateToCreateOrphanage(){
    navigation.navigate('SelectMapPosition');
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
          icon={mapMarkerImg}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -16.649719,
            longitude: -49.325404,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <S.CalloutContainer>
              <S.CalloutText fontFamily='Nunito_700Bold'>Texto texto texto</S.CalloutText>
            </S.CalloutContainer>
          </Callout>
        </Marker>
      </S.MapViewMain>
      <S.Footer>
        <S.FooterText>
          x orfanatos encontrados
        </S.FooterText>
        <S.FooterButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#FFF" />
        </S.FooterButton>
      </S.Footer>
    </S.Container>
  );
}

