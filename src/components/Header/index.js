import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  IconCartArea,
  IconCart,
  QuantityCart,
  LogoArea,
  LogoApp,
} from './styles';

function HeaderApp({ navigation, totalItemCart }) {
  return (
    <Container>
      <LogoArea
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <LogoApp />
      </LogoArea>
      <IconCartArea
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <IconCart />
        <QuantityCart>{totalItemCart || 0}</QuantityCart>
      </IconCartArea>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => ({
  totalItemCart: state.cart.length,
  navigation: ownProps.navigation,
});

export default connect(mapStateToProps)(HeaderApp);
