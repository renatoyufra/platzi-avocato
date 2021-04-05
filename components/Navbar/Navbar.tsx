import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Avocado, Basket } from '@components/SVGIcons'

export default function Navbar() {
  const { pathname } = useRouter()

  return (
    <nav className="shadow-lg font-medium md:text-lg text-md">
      <menu className="flex justify-around m-0 p-0">
        <Link href="/">
          <a
            className={
              'px-3 py-4 flex space-x-2 items-center hover:bg-gray-200 ' +
              (pathname === '/' ? 'bg-gray-200' : '')
            }
          >
            <Avocado size="36" /> <span>Avo Store</span>
          </a>
        </Link>
        <Link href="/cart">
          <a
            className={
              'px-3 py-4 flex space-x-2 items-center hover:bg-gray-200 ' +
              (pathname === '/cart' ? 'bg-gray-200' : '')
            }
          >
            <Basket size="36" /> <span>Canasta</span>
          </a>
        </Link>
      </menu>
    </nav>
  )
}
