import React from 'react'
import Link from 'next/link'
import { Avocado, Basket } from '@components/SVGIcons'

export default function Navbar() {
  return (
    <nav className="shadow-xl font-bold text-lg">
      <menu className="flex justify-around m-0">
        <Link href="/">
          <a className="px-6 py-6 flex space-x-2 items-center hover:bg-gray-200">
            <Avocado size="56" /> <span>Avo Store</span>
          </a>
        </Link>
        <Link href="/cart">
          <a className="px-6 py-6 flex space-x-2 items-center hover:bg-gray-200">
            <Basket size="56" /> <span>Canasta</span>
          </a>
        </Link>
      </menu>
    </nav>
  )
}
