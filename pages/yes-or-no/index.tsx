import Link from 'next/link'
import { useState, useEffect } from 'react'

type YesOrNoApiResponse = {
  data: boolean
}

const fetchResult = async () => {
  const BASE_URL =
    process.env.BACKEND_URL || 'https://platzi-avocato.vercel.app/'

  const res = await fetch(`${BASE_URL}api/question`)
  const { data }: YesOrNoApiResponse = await res.json()

  return data
}
export const getServerSideProps = async () => {
  const answer = await fetchResult()

  return {
    props: { answer },
  }
}

const YesNo = ({ answer }: { answer: boolean }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [newAnswer, setNewAnswer] = useState(answer)
  const [triggerCount, setTriggerCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    fetchResult().then((answer) => {
      setNewAnswer(answer)
      setIsLoading(false)
    })
  }, [triggerCount])

  const tryAgainHandle = async () => {
    setTriggerCount(triggerCount + 1)
  }

  return (
    <div className="flex flex-col justify-between mx-auto items-center">
      <div className="font-bold text-8xl mb-6 text-green-500">
        {newAnswer ? 'YES' : 'NO '}
      </div>
      <div className="w-full flex flex-col items-center space-y-2">
        <button
          className="flex-none bg-green-400 font-semibold text-white py-2 px-3 rounded-md"
          onClick={tryAgainHandle}
          disabled={isLoading}
        >
          {isLoading ? 'Cargando' : 'Intentar de nuevo'}
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
