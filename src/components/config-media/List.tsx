import { ImageType } from '@/types/common';
import Item from './Item';

const List = ({ data }: { data: ImageType[] }) => {
  return (
    <div>
      {data.map((item: any) => (
        <Item key={item.id} defaultValue={item.url} />
      ))}
    </div>
  );
};

export default List;
