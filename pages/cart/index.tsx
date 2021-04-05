import CartItemList from '@components/CartItemList/CartItemList'

const Cart = () => {
  const items = [
    {
      id: 1,
      name: 'palta1',
      quantity: 12,
      price: 120,
      image: '/images/pinkerton.jpg',
    },
    {
      id: 2,
      name: 'palta2',
      quantity: 22,
      price: 320,
      image: '/images/pinkerton.jpg',
    },
    {
      id: 3,
      name: 'palta3',
      quantity: 10,
      price: 220,
      image: '/images/pinkerton.jpg',
    },
  ]
  const removeFromCart = () => {
    console.log('miau')
  }
  return <CartItemList items={items} removeFromCart={removeFromCart} />
}

export default Cart
