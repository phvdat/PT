'use client';
import UploadAudio from "@/components/management-media/UploadAudio";
import UploadImage from "@/components/management-media/UploadImage";
import { Typography } from "antd";
const { Title } = Typography;

export const ManagementMedia = () => {
    return (
        <div>
            <Title level={2}>Management Audio</Title>
            <UploadAudio />
            <Title level={2}>Management Images</Title>
            <UploadImage />
        </div>
    );
}