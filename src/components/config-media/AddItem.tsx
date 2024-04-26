'use client';
import { ImageType } from '@/types/common';
import './style.css';
import axios from 'axios';
import { useContext, useState } from 'react';
import {
  ActionTypes,
  ConfigMediaContext,
} from '@/context/config-media/provider';

const AddItem = () => {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useContext(ConfigMediaContext);
  const handleAdd = async (url: string) => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/images', { url: url });
      const image: ImageType = { url, _id: data.insertedId };
      dispatch({ type: ActionTypes.ADD_IMAGE, payload: image });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <form className='container' onSubmit={() => handleAdd(value)}>
      <input
        type='text'
        className='input-field'
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
      />
      <button
        className='button-update'
        onClick={() => handleAdd(value)}
        disabled={loading}
        type='submit'
      >
        Add
      </button>
      {<span style={loading ? {} : { opacity: '0' }} className='loader'></span>}
    </form>
  );
};
export default AddItem;
