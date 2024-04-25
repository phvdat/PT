import { ImageType } from '@/types/common';
import axios from 'axios';

async function getData() {
  try {
    const { data, status } = await axios.get<ImageType[]>('/api/images');
    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
export default async function Home() {
  const data = await getData();

  return (
    <main>
      {data ? data.map((item) => <h1 key={item._id}>{item.url}</h1>) : null}
    </main>
  );
}
