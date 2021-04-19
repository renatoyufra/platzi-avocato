import Link from 'next/link'
import { useState, useEffect } from 'react'

export const getServerSideProps = async () => {
  const BASE_URL =
    process.env.BACKEND_URL || 'https://platzi-avocato.vercel.app/'

  const res = await fetch(`${BASE_URL}api/question`)
  const { data: answer } = await res.json()
  return {
    props: { answer },
  }
}

const YesNo = ({ answer }: { answer: TAPIQuestionResponse }) => {
  const [retry, setRetry] = useState(null)
  const [newAnswer, setNewAnswer] = useState(null)

  const BASE_URL =
    process.env.BACKEND_URL || 'https://platzi-avocato.vercel.app/'

  const tryAgainHandle = () => {
    setRetry(true)
  }

  useEffect(() => {
    const res = fetch(`${BASE_URL}api/question`)
      .then((response) => response.json())
      .then((data) => {
        setNewAnswer(data)
        console.log('data', data)
      })
  }, [retry])
  return (
    <div className="flex flex-col justify-between mx-auto items-center">
      <div className="font-bold text-8xl mb-6 text-green-500">
        {retry === null ? (answer ? 'YES' : 'NO') : newAnswer ? 'YES' : 'NO'}
      </div>
      <div className="w-full flex flex-col items-center space-y-2">
        <button
          className="flex-none bg-green-400 font-semibold text-white py-2 px-3 rounded-md"
          onClick={() => tryAgainHandle}
        >
          Intentar de nuevo
        </button>
        <Link href="/">
          <a className="text-sm border border-black py-2 px-3 rounded-md">
            Volver al inicio
          </a>
        </Link>
      </div>
    </div>
  )
}

export default YesNo
