import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
`;

export const MapViewMain = styled(MapView)`
  width: ${`${Dimensions.get('window').width}px`}; 
  height: ${`${Dimensions.get('window').height}px`};
`;

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  background-color: rgba(255,255,255,0.8);
  border-radius: 16px;
  justify-content: center;
`;

export const CalloutText = styled.Text`
  text-align: center;
  color: #0089a5;
  font-size: 14px;
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background: #FFF;
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* Sombra */
  /* Android */
  elevation: 3;
  /* IOS */
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
`;

export const FooterText = styled.Text`
  color: #8fa7b3;
`;


export const FooterButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background: #15c3d6;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;