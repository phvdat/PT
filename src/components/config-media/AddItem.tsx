'use client';
import { ImageType } from '@/types/common';
import './style.css';
import axios from 'axios';
import { useState } from 'react';

const AddItem = () => {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleAdd = async (url: string) => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/images', { url: url });
      console.log(data);
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
