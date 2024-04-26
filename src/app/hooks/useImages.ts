import { ConfigMediaContext } from '@/context/config-media/provider';
import { ImageType } from '@/types/common';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

export const useImages = () => {
  const [data, setData] = useState<ImageType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get<ImageType[]>('/api/images');
        if (status === 200) {
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { data };
};
