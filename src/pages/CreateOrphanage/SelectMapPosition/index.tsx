import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../../images/map-marker.png';

import * as S from './styled';

export default function SelectMapPosition() {
  const navigation = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0});

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position });
  }

  return (
    <S.Container>
      <S.MapViewMain 
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectMapPosition}
      >
        { !!position.latitude && (
          <Marker 
            icon={mapMarkerImg}
            coordinate={position}
          />
        )}
      </S.MapViewMain>

      { !!position.latitude && (
        <S.NextButton onPress={handleNextStep}>
          <S.NextButtonText>Próximo</S.NextButtonText>
        </S.NextButton>
      )}
    </S.Container>
  );
}

