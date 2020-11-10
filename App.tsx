import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

export default function App() {
  return (
    <View style={styles.container}>
      <Title>Open up App.tsx to start working on your app!</Title>
      <StatusBar style="auto" />
    </View>
  );
}

const Title = styled.Text`
  color: red;
  text-align: center;
  font-size: 16px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
