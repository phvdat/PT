import { storage } from "@/lib/firebase";
import { listAll, ref } from "firebase/storage";
import HomePage from "./home/Home";

export default async function Home() {
  const getListAllImages = async () => {
    const listRef = ref(storage, 'images');
    try {
      const res = await listAll(listRef);
      const listImages = res.items.map((itemRef) => `https://firebasestorage.googleapis.com/v0/b/${storage.app.options.storageBucket}/o/${encodeURIComponent(itemRef.fullPath)}?alt=media`)
      return listImages;
    } catch (error) {
      return []
    }
  }
  const listImages = await getListAllImages();

  const getListAllAudio = async () => {
    const listRef = ref(storage, 'audio');
    try {
      const res = await listAll(listRef);
      const listAudio = res.items.map((itemRef) => `https://firebasestorage.googleapis.com/v0/b/${storage.app.options.storageBucket}/o/${encodeURIComponent(itemRef.fullPath)}?alt=media`)
      return listAudio;
    } catch (error) {
      return []
    }
  }

  const listAudio = await getListAllAudio();

  return <HomePage listAudio={listAudio} listImages={listImages} />

}
