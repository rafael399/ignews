import { NextApiRequest, NextApiResponse } from 'next'

const users = (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;

  const users = [
    { id: 1, nome: 'Rafael' },
    { id: 2, nome: 'Rafael' },
    { id: 3, nome: 'Rafael' },
  ]

  return response.json(users)
}

export default users
