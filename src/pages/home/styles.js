import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.View`
  flex: 1;
  background: #000;
`;

export const ProductList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
  flex: 0.9;
  color: #fff;
`;

export const Product = styled.View`
  background: #fff;
  margin: 10px;
  padding: 10px 20px;
  width: 280px;
  border-radius: 5px;
`;

export const AreaPriceTitle = styled.View`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  text-align: justify;
  margin-left: 10px;
  line-height: 20px;
`;

export const Price = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  font-weight: 700;
`;

export const AreaPhoto = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  margin-top: 10px;
`;

export const AreaButton = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  background: #7159c1;
  border-radius: 5px;
  padding-right: 10px;
  max-height: 40px;
`;

export const IconArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  background: ${darken(0.03, '#7159c1')};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Quantity = styled.Text`
  margin-left: 5px;
  color: #fff;
  font-weight: 600;
`;

export const ButtonAddCart = styled(RectButton)``;

export const ButtonAddCartText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  padding: 10px;
`;
