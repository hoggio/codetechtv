import { connectToDatabase } from '../../util/mongodb';

export default async function userHandler(req, res) {
  const { db } = await connectToDatabase();
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const data = await db.collection('users').find({}).limit(20).toArray();
        console.log(data);
        res.json(data);
      } catch (error) {
        res.status(200).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        //   const data = await db.collection('users').find({}).limit(20).toArray();
        //   console.log(data);
        //   res.json(data);
      } catch (error) {
        res.status(200).json({ success: false });
      }
      break;

    default:
      break;
  }
}
