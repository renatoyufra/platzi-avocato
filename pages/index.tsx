import ProductList from '@components/Products/ProductList'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data)
      })
  }, [])

  return (
    <div className="font-montserrat">
      <ProductList products={productList} />
    </div>
  )
}

export default HomePage
