import React from 'react'
import Link from 'next/link'

type CartItemListProps = {
  items: any[]
  removeFromCart: (product: TProduct) => void
}

const CartItemList = ({ items, removeFromCart }: CartItemListProps) => {
  if (items.length === 0) {
    return (
      <div className="message rounded border border-gray-400 px-6 py-4 bg-gray-100">
        <h1 className="font-semibold text-xl">Your cart is empty</h1>
        <p className="text-gray-500">
          You will need to add some items to the cart before you can checkout.
        </p>
      </div>
    )
  }
  return (
    <div>
      <ul className="w-9/12 mx-auto">
        {items.map((item) => {
          // deestructuramos
          const { id, name, quantity, price, image } = item
          return (
            <li key={id} className="flex space-y-4 border-b p-4">
              <div className="w-32 flex-none">
                <img src={image} alt={name} />
              </div>
              <div className="px-4 flex-grow">
                <Link href="/product/[id]" as={`/product/${id}`} passHref>
                  <h1 className="font-semibold text-2xl">{name}</h1>
                </Link>
                <span className="text-gray-600">
                  {quantity} x {price}
                </span>
                <p>Some more information goes here...</p>
              </div>
              <div className="flex">
                <button onClick={() => removeFromCart}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="w-9/12 mx-auto border p-4 mt-4 flex">
        <div className="flex-grow">
          Sub total: <span className="font-bold">5</span>
        </div>
        <div>
          <button className="px-4 py-2 bg-black text-white font-semibold rounded">
            Check out
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItemList
