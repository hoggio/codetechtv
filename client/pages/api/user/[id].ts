import { connectToDatabase } from '../../../util/mongodb';
const ObjectId = require('mongodb').ObjectId;

export default async function userHandler(req, res) {
  const { db } = await connectToDatabase();

  const {
    query: { id },
    method,
  } = req;
  const objectId = new ObjectId(id);

  switch (method) {
    case 'GET':
      // Get data from your database

      const user = await db.collection('users').findOne({ _id: objectId });

      res.status(200).json(user);
      break;
    case 'PUT':
      // Update or create data in your database
      const updatedUser = await db
        .collection('users')
        .updateOne({ _id: objectId }, { $set: req.body }, { upsert: false });
      console.log('updated');

      res.status(201).json(updatedUser);
      break;
    case 'DELETE':
      // Delete data in your database
      const deletedUser = await db
        .collection('users')
        .deleteOne({ _id: objectId });
      console.log('deleted');

      res.status(200).json(deletedUser);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
