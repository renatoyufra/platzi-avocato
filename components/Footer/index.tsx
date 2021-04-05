import Link from 'next/link'

const Footer = () => (
  <footer className="border-t border-l border-gray-200 p-4 flex flex-col">
    <div className="flex justify-center space-x-10 md:space-x-40">
      <div>
        <ul>
          <li>
            <h2 className="font-bold leading-10">Nosotros</h2>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 hover:text-green-500 hover:font-bolder"
            >
              Conoce más
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h2 className="font-bold leading-10">Servicios</h2>
          </li>
          <li>
            <Link href="/" passHref>
              <a
                href="/"
                className="text-blue-500 hover:text-green-500 hover:font-bolder"
              >
                Todos los productos
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h2 className="font-bold leading-10">Hecho para</h2>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 hover:text-green-500 hover:font-bolder"
            >
              Conocer un poco más de los cuyos
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-3 p-4 flex justify-center text-xs">
      Diseñado por Metriqa.pe
    </div>
  </footer>
)

export default Footer
