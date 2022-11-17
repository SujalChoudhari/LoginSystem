// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PocketBase from 'pocketbase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const { body } = req

  const client = new PocketBase('http://127.0.0.1:8090');

  const user = await client.users.authViaEmail(body.mailid, body.password)


  res.status(200).json({ message: "success" })
}
