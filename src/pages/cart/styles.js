import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background: #000;
  padding: 20px;
`;

export const CartProduct = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 6px;
`;

export const ItemArea = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin-top: 20px;
`;

export const Item = styled.View`
  padding: 10px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
  align-self: center;
  background: #fff;
  margin-right: 8px;
`;

export const ProductArea = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: #999;
`;

export const ProductValue = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const TotalItemArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgb(235, 255, 250);
  max-height: 40px;
`;

export const TotalItemQuantityArea = styled.View`
  flex-direction: row;
`;

export const TotalItemQuantity = styled.Text`
  padding: 5px 15px;
  font-size: 12px;
  text-align: center;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0;
  border-radius: 4px;
`;

export const TotalItem = styled.Text`
  color: #000;

  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
`;

export const TotalCartArea = styled.View`
  align-items: center;
  text-align: center;
`;

export const TotalCartText = styled.Text`
  color: #d3d3d3;

  font-size: 20px;
  text-transform: uppercase;
`;

export const TotalCartValue = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonArea = styled.View`
  margin: 20px;
`;

export const CloseOrderButton = styled(RectButton)`
  border-radius: 4px;
  background: #7159c1;
`;

export const CloseOrderButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  padding: 5px;
  margin: 5px;
  text-align: center;
`;

export const IconDelete = styled(Icon).attrs({
  name: 'delete-forever',
  size: 30,
  color: '#7159c1',
})``;

export const ButtonDelete = styled(RectButton)`
  align-self: center;
`;

export const IconMinus = styled(Icon).attrs({
  name: 'remove',
  size: 20,
  color: '#7159c1',
})`
  align-self: center;
  text-align: center;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const ButtonMinus = styled(RectButton)`
  align-self: center;
`;

export const IconPlus = styled(Icon).attrs({
  name: 'add',
  size: 20,
  color: '#7159c1',
})`
  align-self: center;
  text-align: center;
  margin-left: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const ButtonPlus = styled(RectButton)`
  align-self: center;
`;

export const ShowEmptyCartArea = styled.View`
  flex: 0.8;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  border-radius: 5px;
`;

export const ShowEmptyCartIcon = styled(Icon).attrs({
  size: 80,
  name: 'remove-shopping-cart',
})`
  opacity: 0.5;
`;

export const ShowEmptyCartText = styled.Text`
  font-size: 30px;
  text-align: center;
`;
