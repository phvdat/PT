import { connectToDatabase } from '@/lib/mongodb';
const IMAGE_COLLECTION = 'images';
import { ObjectId } from 'mongodb';

export async function GET() {
  let { db } = await connectToDatabase();
  const response = await db.collection(IMAGE_COLLECTION).find().toArray();
  return Response.json(response, { status: 200 });
}

export async function POST(request: Request) {
  const { url } = await request.json();
  let { db } = await connectToDatabase();
  const response = await db
    .collection(IMAGE_COLLECTION)
    .insertOne({ url: url });
  return Response.json(response, { status: 200 });
}

export async function PUT(request: Request) {
  const { _id, url } = await request.json();

  let { db } = await connectToDatabase();
  const response = await db
    .collection(IMAGE_COLLECTION)
    .updateOne({ _id: new ObjectId(_id) }, { $set: { url } });
  return Response.json(response, { status: 200 });
}

export async function DELETE(request: Request) {
  const { _id } = await request.json();

  let { db } = await connectToDatabase();
  const response = await db
    .collection(IMAGE_COLLECTION)
    .findOneAndDelete({ _id: new ObjectId(_id) });
  return Response.json(response, { status: 200 });
}
