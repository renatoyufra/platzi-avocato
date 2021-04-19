import { IncomingMessage, ServerResponse } from 'http'

const randomAnswer = () => {
  const random = Math.floor(Math.random() * 10)
  return random % 2 == 0
}
const shouldEat = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const answer = randomAnswer()
  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ data: answer }))
}

export default shouldEat
