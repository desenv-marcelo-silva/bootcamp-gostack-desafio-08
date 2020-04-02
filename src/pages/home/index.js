import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  Product,
  ProductList,
  Image,
  AreaButton,
  AreaPhoto,
  AreaPriceTitle,
  ButtonAddCart,
  ButtonAddCartText,
  IconArea,
  Quantity,
  Title,
  Price,
} from './styles';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  const dispatch = useDispatch();

  function handleAddCart(id) {
    dispatch(CartActions.addToCartRequest(id));

    navigation.navigate('Cart');
  }

  return (
    <Container>
      <List>
        <ProductList>
          {products.map(product => (
            <Product key={product.id}>
              <AreaPhoto>
                <Image source={{ uri: product.image }} />
              </AreaPhoto>

              <AreaPriceTitle>
                <Title>{product.title}</Title>
                <Price>{product.priceFormatted}</Price>
              </AreaPriceTitle>

              <AreaButton>
                <IconArea>
                  <Icon name="add-shopping-cart" size={20} color="#FFF" />
                  <Quantity>{(amount && amount[product.id]) || 0}</Quantity>
                </IconArea>
                <ButtonAddCart onPress={() => handleAddCart(product.id)}>
                  <ButtonAddCartText>Adicionar ao carrinho</ButtonAddCartText>
                </ButtonAddCart>
              </AreaButton>
            </Product>
          ))}
        </ProductList>
      </List>
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
