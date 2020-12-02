
import React from 'react';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarkerImg from '../../images/map-marker.png';

import * as S from './styled';

export default function OrphanagesDetails() {
  return (
    <S.Container>
      <S.ImagesContainer>
        <S.ScrollView horizontal pagingEnabled>
          <S.Image source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
          <S.Image source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
          <S.Image source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
        </S.ScrollView>
      </S.ImagesContainer>

      <S.DetailsContainer>
        <S.Title>Orf. Esperança</S.Title>
        <S.Description>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</S.Description>
      
        <S.MapContainer>
          <S.MapViewMain 
            initialRegion={{
              latitude: -27.2092052,
              longitude: -49.6401092,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: -27.2092052,
                longitude: -49.6401092
              }}
            />
          </S.MapViewMain>

          <S.RoutesContainer>
            <S.RoutesText>Ver rotas no Google Maps</S.RoutesText>
          </S.RoutesContainer>
        </S.MapContainer>
      
        <S.Separator />

        <S.Title>Instruções para visita</S.Title>
        <S.Description>Venha como se sentir a vontade e traga muito amor e paciência para dar.</S.Description>

        <S.ScheduleContainer>
          <S.ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <S.ScheduleTextBlue>Segunda à Sexta 8h às 18h</S.ScheduleTextBlue>
          </S.ScheduleItemBlue>
          <S.ScheduleItemGreen>
            <Feather name="info" size={40} color="#39CC83" />
            <S.ScheduleTextGreen>Atendemos fim de semana</S.ScheduleTextGreen>
          </S.ScheduleItemGreen>
        </S.ScheduleContainer>

        <S.ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <S.ContactButtonText>Entrar em contato</S.ContactButtonText>
        </S.ContactButton>
      </S.DetailsContainer>
    </S.Container>
  )
}

