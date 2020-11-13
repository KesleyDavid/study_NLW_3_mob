import React from 'react';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <MapViewMain initialRegion={{
        latitude: -16.6356162,
        longitude: -49.3303268,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const MapViewMain = styled(MapView)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;
