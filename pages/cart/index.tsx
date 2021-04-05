import CartItemList from '@components/CartItemList/CartItemList'
import { useCart, useCartMutations } from '@store/Cart'

const Cart = () => {
  const { items } = useCart()
  const { removeFromCart } = useCartMutations()

  return <CartItemList items={items} removeFromCart={removeFromCart} />
}

export default Cart
