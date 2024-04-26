'use client';
import ConfigMediaProvider from '@/context/config-media/provider';
import ConfigMedia from './ConfigMedia';

const Page = () => {
  return (
    <ConfigMediaProvider>
      <ConfigMedia />
    </ConfigMediaProvider>
  );
};

export default Page;
