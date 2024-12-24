import { listAll, ref } from 'firebase/storage';
import { storage } from '@/lib/firebase';

export async function GET() {
  const listRef = ref(storage, 'images');
  const res = await listAll(listRef);
  const listImages = res.items.map(
    (itemRef) =>
      `https://firebasestorage.googleapis.com/v0/b/${
        storage.app.options.storageBucket
      }/o/${encodeURIComponent(itemRef.fullPath)}?alt=media`
  );
  return Response.json(listImages, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
