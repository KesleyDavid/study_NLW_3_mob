import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import * as S from './styled';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

// export default function Header(props: HeaderProps) {
export default function Header({ title, showCancel = true }: HeaderProps) {
  // showCancel -> Se não for informado será true

  const navigation = useNavigation();

  function handleGoBackToHomepage() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <S.Container>
      <BorderlessButton onPress={navigation.goBack}> 
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      
      {/* <S.Text>{props.title}</S.Text> */}
      <S.Text>{title}</S.Text>

      { showCancel ? (
        <BorderlessButton onPress={handleGoBackToHomepage}> 
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <S.View />
        // : null -> retorno null
      )}
    </S.Container>
  )
}
