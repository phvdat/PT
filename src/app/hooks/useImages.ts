import { ADD_IMAGE, ConfigMediaContext } from '@/context/config-media/provider';
import { ImageType } from '@/types/common';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

export const useImages = () => {
  const [data, setData] = useState<ImageType[]>([]);
  const { dispatch } = useContext(ConfigMediaContext);
  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get<ImageType[]>('/api/images');
        if (status === 200) {
          setData(data);
          dispatch({ type: ADD_IMAGE, payload: data });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { data };
};
