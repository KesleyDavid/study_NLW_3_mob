import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

interface OrphanageDataRouteParams {
  position: { latitude: number, longitude: number};
}

import * as S from './styled';

export default function OrphanageData() {
  const route = useRoute();
  const navigation = useNavigation();

  const [open_on_weekends, setOpenOnWeekends] = useState(false);

  const params = route.params as OrphanageDataRouteParams;
  const position = params.position;

  function handleCreateOrphanage() {
    // todo
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita! Precisamos de acesso às suas fotos...');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);
  }

  return (
    <S.Container contentContainerStyle={{ padding: 24 }}>
      {/* kesdev - contentContainerStyle*/}
      <S.Title>Dados</S.Title>

      <S.Label>Nome</S.Label>
      <S.TextInput />

      <S.Label>Sobre</S.Label>
      <S.TextAreaInput
        multiline
      />

      <S.Label>Whatsapp</S.Label>
      <S.TextInput />

      <S.Label>Fotos</S.Label>
      <S.ImagesInput onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </S.ImagesInput>

      <S.Title>Visitação</S.Title>

      <S.Label>Instruções</S.Label>
      <S.TextAreaInput
        multiline
      />

      <S.Label>Horario de visitas</S.Label>
      <S.TextInput />

      <S.SwitchContainer>
        <S.Label>Atende final de semana?</S.Label>
        <S.Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </S.SwitchContainer>

      <S.NextButton onPress={handleCreateOrphanage}>
        <S.NextButtonText>Cadastrar</S.NextButtonText>
      </S.NextButton>
    </S.Container>
  );
}

