import ProductList from '@components/Products/ProductList'
import React, { useEffect, useState } from 'react'

export const getServerSideProps = async () => {
  const BASE_URL =
    process.env.BACKEND_URL || 'https://platzi-avocato.vercel.app/'
  const response = await fetch(`${BASE_URL}api/avo`)
  const { data: productList }: TAPIAvoResponse = await response.json()
  return {
    props: { productList },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <div className="font-montserrat">
      <ProductList products={productList} />
    </div>
  )
}

export default HomePage
