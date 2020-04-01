import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';

import {
  Container,
  CartProduct,
  ButtonArea,
  TotalCartArea,
  TotalCartText,
  TotalCartValue,
  CloseOrderButton,
  CloseOrderButtonText,
  ItemArea,
  Item,
  ProductInfo,
  ProductArea,
  ProductImage,
  ProductTitle,
  ProductValue,
  TotalItemArea,
  TotalItemQuantityArea,
  TotalItemQuantity,
  TotalItem,
  IconDelete,
  ButtonDelete,
  IconMinus,
  ButtonMinus,
  IconPlus,
  ButtonPlus,
  ShowEmptyCartArea,
  ShowEmptyCartText,
  ShowEmptyCartIcon,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, total, removeFromCart, updateQuantityRequest }) {
  function increment(product) {
    updateQuantityRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateQuantityRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart && cart.length === 0 ? (
        <ShowEmptyCartArea>
          <ShowEmptyCartIcon />
          <ShowEmptyCartText>Seu carrinho está vazio.</ShowEmptyCartText>
        </ShowEmptyCartArea>
      ) : (
        <CartProduct>
          <ItemArea
            data={cart}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Item>
                <ProductInfo>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductArea>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductValue>{item.priceFormatted}</ProductValue>
                  </ProductArea>
                  <ButtonDelete onPress={() => removeFromCart(item.id)}>
                    <IconDelete />
                  </ButtonDelete>
                </ProductInfo>
                <TotalItemArea>
                  <TotalItemQuantityArea>
                    <ButtonMinus onPress={() => decrement(item)}>
                      <IconMinus />
                    </ButtonMinus>
                    <TotalItemQuantity>{item.amount}</TotalItemQuantity>
                    <ButtonPlus onPress={() => increment(item)}>
                      <IconPlus />
                    </ButtonPlus>
                  </TotalItemQuantityArea>
                  <TotalItem>{item.subtotal}</TotalItem>
                </TotalItemArea>
              </Item>
            )}
          />
          <TotalCartArea>
            <TotalCartText>Total</TotalCartText>
            <TotalCartValue>{total}</TotalCartValue>
          </TotalCartArea>
          <ButtonArea>
            <CloseOrderButton onPress={() => {}}>
              <CloseOrderButtonText>Finalizar pedido</CloseOrderButtonText>
            </CloseOrderButton>
          </ButtonArea>
        </CartProduct>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
