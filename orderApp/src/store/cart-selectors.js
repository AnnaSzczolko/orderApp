const selectItemsInCart = state => state.cart.itemsInCart || []

export const selectTotalQuantity = (state) => {
 return  selectItemsInCart(state).reduce(
        (total, item) => total + item.quantity, 0
    )
}
export const selectTotalPrice = (state) => {
  return  selectItemsInCart(state).reduce(
        (total, item) => total + item.quantity * item.price, 0
    )
}