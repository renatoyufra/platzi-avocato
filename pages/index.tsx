import ProductList from '@components/Products/ProductList'
import Link from 'next/link'

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
      <div className="flex justify-center text-blue-500 tracking-tighter text-sm">
        <Link href="/yes-or-no">
          <a>¿Debería comer una palta hoy?</a>
        </Link>
      </div>
      <ProductList products={productList} />
    </div>
  )
}

export default HomePage
