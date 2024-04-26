import { ImageType } from '@/types/common';
import Item from './Item';

const List = ({ data }: { data: ImageType[] }) => {
  return (
    <div>
      {data.map((item) => (
        <Item key={item._id} defaultValue={item} />
      ))}
    </div>
  );
};

export default List;
