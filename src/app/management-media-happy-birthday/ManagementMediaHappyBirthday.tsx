'use client';
import UploadAudioHappyBirthday from '@/components/management-media-happy-birthday/UploadAudioHappyBirthday';
import UploadImageHappyBirthday from '@/components/management-media-happy-birthday/UploadImageHappyBirthday';
import { Typography } from 'antd';
const { Title } = Typography;

export const ManagementMediaHappyBirthday = () => {
  return (
    <div style={{ width: '100%', textAlign: 'center', padding: '20px 20px' }}>
      <Title level={2}>Management Audio</Title>
      <UploadAudioHappyBirthday />
      <Title level={2}>Management Images</Title>
      <UploadImageHappyBirthday />
    </div>
  );
};
