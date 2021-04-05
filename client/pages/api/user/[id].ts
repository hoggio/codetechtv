import { connectToDatabase } from '../../../util/mongodb';
const ObjectId = require('mongodb').ObjectId;

export default async function userHandler(req, res) {
  const { db } = await connectToDatabase();

  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      const objectId = new ObjectId(id);
      const user = await db
        .collection('users')
        .find({ _id: objectId })
        .toArray();
      console.log(user[0].name);

      res.status(200).json(user[0]);
      break;
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
