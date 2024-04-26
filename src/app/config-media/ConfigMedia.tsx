import AddItem from '@/components/config-media/AddItem';
import List from '@/components/config-media/List';
import { ConfigMediaContext } from '@/context/config-media/provider';
import { useContext } from 'react';
import { useImages } from '../hooks/useImages';

const ConfigMedia = () => {
  useImages();
  const {
    state: { images },
  } = useContext(ConfigMediaContext);
  return (
    <div>
      <h1>Config Image</h1>
      <AddItem />
      <List data={images} />
    </div>
  );
};

export default ConfigMedia;
