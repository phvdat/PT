import AddItem from '@/components/config-media/AddItem';
import List from '@/components/config-media/List';
import {
  ActionTypes,
  ConfigMediaContext,
} from '@/context/config-media/provider';
import { useContext, useEffect } from 'react';
import { useImages } from '../hooks/useImages';

const ConfigMedia = () => {
  const { data } = useImages();
  const {
    state: { images },
    dispatch,
  } = useContext(ConfigMediaContext);

  useEffect(() => {
    dispatch({ type: ActionTypes.SET_IMAGES, payload: data });
  }, [data]);

  return (
    <div>
      <h1>Config Image</h1>
      <AddItem />
      <List data={images} />
    </div>
  );
};

export default ConfigMedia;
