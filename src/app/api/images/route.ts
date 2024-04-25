import { connectToDatabase } from '@/lib/mongodb';
const IMAGE_COLLECTION = 'images';

export async function GET() {
  let { db } = await connectToDatabase();
  const response = await db.collection(IMAGE_COLLECTION).find().toArray();
  return Response.json(response, { status: 200 });
}

export async function POST() {
  let { db } = await connectToDatabase();
  const response = await db
    .collection(IMAGE_COLLECTION)
    .insertOne({ name: 'test' });
  return Response.json(response, { status: 200 });
}
