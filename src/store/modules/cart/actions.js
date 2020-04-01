export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateQuantityRequest(id, amount) {
  return {
    type: '@cart/UPDATE_QUANTITY_REQUEST',
    id,
    amount,
  };
}

export function updateQuantitySuccess(id, amount) {
  return {
    type: '@cart/UPDATE_QUANTITY_SUCCESS',
    id,
    amount,
  };
}
