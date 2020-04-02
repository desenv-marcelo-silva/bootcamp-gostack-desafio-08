import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  IconCartArea,
  IconCart,
  QuantityCart,
  LogoArea,
  LogoApp,
} from './styles';

export default function HeaderApp({ navigation }) {
  const totalItemCart = useSelector(state => state.cart.length);

  return (
    <Container>
      <LogoArea
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <LogoApp />
      </LogoArea>
      <IconCartArea
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >
        <IconCart />
        <QuantityCart>{totalItemCart || 0}</QuantityCart>
      </IconCartArea>
    </Container>
  );
}

HeaderApp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
