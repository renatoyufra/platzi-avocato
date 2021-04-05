import React, { useState } from 'react'
import { useCartMutations } from '@store/Cart'

type AddToCartProps = {
  product: TProduct
}
// Fake server Response
const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600)
  })

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

const AddToCart = ({ product }: AddToCartProps) => {
  // states
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { addToCart } = useCartMutations()

  // function
  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  const handleSubmit = async () => {
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)
      addToCartRequest()
        .then(() => {
          addToCart(product, quantity)
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          console.log('error')
          setError(`Error: ${err}` || 'Something went wrong')
          setLoading(false)
        })
    }
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10))

  return (
    <>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        placeholder="Cantidad"
        min="1"
        className="border-gray-400 w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white font-bold px-3 flex-none"
      >
        Add to Cart
      </button>
      {error && (
        <div style={{ color: 'red', position: 'absolute' }}>{error}</div>
      )}
    </>
  )
}
export default AddToCart
