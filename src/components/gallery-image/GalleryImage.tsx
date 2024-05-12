import CardImage from "./CardImage";
import './GalleryImageStyle.css';

interface GalleryImageProsp {
  images: string[];

}
const GalleryImage = ({ images }: GalleryImageProsp) => {
  const list1 = images.slice(0, images.length / 2 + 1);
  const list2 = images.slice(images.length / 2 + 1, images.length);
  return <div className="row-gallery">
    <div className="col-gallery">
      {
        list1.map((item, index) => {
          return <CardImage key={item} image={item} />
        })
      }
    </div>
    <div className="col-gallery">
      {
        list2.map((item, index) => {
          return <CardImage key={item} image={item} />
        })
      }
    </div>
  </div >
};

export default GalleryImage;