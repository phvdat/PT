'use client';
import { GetProp, Image, Spin, Upload, UploadFile, UploadProps } from 'antd';
import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';
import { ref, uploadBytes, listAll, deleteObject } from 'firebase/storage';
import { storage } from '@/lib/firebase';

const UploadImageHappyBirthday = () => {
  const [loading, setLoading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const listRef = ref(storage, 'images-happy-birthday');

  const getListAll = async () => {
    try {
      const res = await listAll(listRef);

      const listImages = res.items.map((itemRef) => ({
        uid: itemRef.name,
        name: itemRef.name,
        status: 'done',
        url: `https://firebasestorage.googleapis.com/v0/b/${
          storage.app.options.storageBucket
        }/o/${encodeURIComponent(itemRef.fullPath)}?alt=media`,
      }));
      setFileList(listImages as UploadFile[]);
    } catch (error) {
      //
    }
  };

  const handleUpload = async (file: RcFile) => {
    setLoading(true);
    const storageRef = ref(
      storage,
      `images-happy-birthday/${new Date().getTime()}${file.name}`
    );
    await uploadBytes(storageRef, file);
    await getListAll();
    setLoading(false);
  };

  const handleRemove = async (file: UploadFile) => {
    const storageRef = ref(storage, `images-happy-birthday/${file.name}`);
    await deleteObject(storageRef);
    await getListAll();
  };

  useEffect(() => {
    getListAll();
  }, []);

  return (
    <>
      <Upload
        listType='picture-card'
        fileList={fileList}
        customRequest={({ file }) => {
          handleUpload(file as RcFile);
        }}
        onRemove={(file) => handleRemove(file)}
      >
        {loading ? (
          <Spin />
        ) : (
          <button
            style={{ border: 0, background: 'none' }}
            type='button'
            disabled={loading}
          >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        )}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default UploadImageHappyBirthday;
