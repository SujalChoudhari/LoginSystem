// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PocketBase from 'pocketbase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const { body } = req

  const client = new PocketBase('http://127.0.0.1:8090');

  const user = await client.users.create({
    email: body.mailid,
    password: body.password,
    passwordConfirm: body.password,
  })

  const updatedProfile = await client.records.update('profiles', user.profile.id, {
    name: body.first + " " + body.last,
  });

  res.status(200).json({message:"success"})
}
