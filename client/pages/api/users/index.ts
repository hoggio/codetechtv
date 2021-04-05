import { connectToDatabase } from '../../../util/mongodb';

export default async function usersHandler(req, res) {
  const { db } = await connectToDatabase();

  const users = await db.collection('users').find({}).limit(20).toArray();
  console.log(users);
  res.status(200).json(users);
}
