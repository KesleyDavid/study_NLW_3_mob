import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from  './pages/OrphanagesMap';
import OrphanageDetails from  './pages/OrphanageDetails';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false
      }}>
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
          options={{
            // Mesmas opções do Navigator
          }}
        />
        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            // Mesmas opções do Navigator
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}