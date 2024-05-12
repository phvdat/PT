'use client';
import UploadAudio from '@/components/management-media/UploadAudio';
import UploadImage from '@/components/management-media/UploadImage';
import { HeartFilled } from '@ant-design/icons';
import { Button, Typography } from 'antd';
const { Title } = Typography;

export const ManagementMedia = () => {
  return (
    <div style={{ width: '100%', textAlign: 'center', padding: '20px 20px' }}>
      <Button href='/' size='large'>
        <HeartFilled />
      </Button>
      <Title level={2}>Management Audio</Title>
      <UploadAudio />
      <Title level={2}>Management Images</Title>
      <UploadImage />
    </div>
  );
};
