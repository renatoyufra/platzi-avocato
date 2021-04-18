import ProductList from '@components/Products/ProductList'
import React, { useEffect, useState } from 'react'

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}api/avo`)
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
