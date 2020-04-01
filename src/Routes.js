import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home';
import Cart from './pages/cart';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => {
          return <Header navigation={navigation} />;
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
