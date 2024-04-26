'use client';
import { ImageType } from '@/types/common';
import './style.css';
import axios from 'axios';
import { useContext, useState } from 'react';
import {
  ActionTypes,
  ConfigMediaContext,
} from '@/context/config-media/provider';
interface ItemProps {
  defaultValue: ImageType;
}
const Item = ({ defaultValue }: ItemProps) => {
  const [value, setValue] = useState<string>(defaultValue.url);
  const [loading, setLoading] = useState<boolean>(false);

  const { dispatch } = useContext(ConfigMediaContext);
  const handleUpdate = async (id: string, url: string) => {
    setLoading(true);
    try {
      await axios.put('/api/images', { _id: id, url: url });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const { data } = await axios.delete('/api/images', { data: { _id: id } });
      dispatch({ type: ActionTypes.REMOVE_IMAGE, payload: data._id });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <form
      className='container'
      onSubmit={() => handleUpdate(defaultValue._id, value)}
    >
      <input
        type='text'
        defaultValue={defaultValue.url}
        className='input-field'
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
      />
      <button
        className='button-update'
        onClick={() => handleUpdate(defaultValue._id, value)}
        disabled={loading}
        type='submit'
      >
        Update
      </button>
      <button
        className='button-delete'
        disabled={loading}
        onClick={() => handleDelete(defaultValue._id)}
      >
        Delete
      </button>
      {<span style={loading ? {} : { opacity: '0' }} className='loader'></span>}
    </form>
  );
};
export default Item;
