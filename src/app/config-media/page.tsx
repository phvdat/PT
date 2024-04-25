'use client';
import List from '@/components/config-media/List';
import { useImages } from '../hooks/useImages';

const Page = () => {
  const { data } = useImages();
  console.log(data);

  return (
    <div>
      <h1>Config Image</h1>
      <List data={data} />
    </div>
  );
};

export default Page;
