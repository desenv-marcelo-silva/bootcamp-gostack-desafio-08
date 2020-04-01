import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

class Home extends Component {
  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddCart = id => {
    const { addToCartRequest, navigation } = this.props;

    addToCartRequest(id);

    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
                    <Quantity>{amount[product.id] || 0}</Quantity>
                  </IconArea>
                  <ButtonAddCart onPress={() => this.handleAddCart(product.id)}>
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
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
