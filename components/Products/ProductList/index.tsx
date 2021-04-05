import React from 'react'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <a className="border rounded-md max-w-md border-gray-300 p-1">
        <article className=" flex flex-col items-center">
          <img src={image} alt={name} />
          <div className="flex flex-col border-t w-full p-3">
            <span className="font-bold">{name}</span>
            <div>
              <span className="text-xs mr-2">Precio: S/.</span>
              <span className="bg-red-600 text-white font-medium text-xs rounded-2xl px-2 max-w-min">
                {price}
              </span>
            </div>
          </div>
        </article>
      </a>
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <section className="grid grid-cols-3 my-10 gap-5 mx-10 justify-items-center">
    {mapProductsToCards(products)}
  </section>
)

export default ProductList
