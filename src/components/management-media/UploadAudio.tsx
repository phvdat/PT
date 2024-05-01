'use client';
import { Button, GetProp, Image, Spin, Upload, UploadFile, UploadProps } from "antd";
import { useEffect, useState } from "react";
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { RcFile } from "antd/es/upload";
import { ref, uploadBytes, listAll, deleteObject } from "firebase/storage";
import { storage } from "@/lib/firebase";

const UploadAudio = () => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const listRef = ref(storage, 'audio');

  const getListAll = async () => {
    try {
      const res = await listAll(listRef);

      const listImages = res.items.map((itemRef) => ({
        uid: itemRef.name,
        name: itemRef.name,
        status: 'done',
        url: `https://firebasestorage.googleapis.com/v0/b/${storage.app.options.storageBucket}/o/${encodeURIComponent(itemRef.fullPath)}?alt=media`,
      }))
      setFileList(listImages as UploadFile[]);
    } catch (error) {
      // 
    }

  }

  const handleUpload = async (file: File) => {
    setLoading(true);
    const storageRef = ref(storage, `audio/${new Date().getTime()}${file.name}`);
    await uploadBytes(storageRef, file)
    await getListAll();
    setLoading(false);
  }

  const handleRemove = async (file: UploadFile) => {
    const storageRef = ref(storage, `audio/${file.name}`);
    await deleteObject(storageRef);
    await getListAll();
  }

  useEffect(() => { getListAll() }, []);

  return (
    <Upload
      customRequest={({ file }) => handleUpload(file as RcFile)}
      accept=".mp3"
      fileList={fileList}
      onRemove={(file) => handleRemove(file)}
    >
      <Button icon={<UploadOutlined />} disabled={loading}>
        {
          loading ? <Spin /> :
            'Upload'
        }
      </Button>

    </Upload>
  );
}

export default UploadAudio;