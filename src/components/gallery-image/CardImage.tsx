import './CardImageStyle.css';

const CardImage = ({ image }: { image: string }) => {
  return (
    <div className="card-image">
      <img loading='lazy' className="image-gallery" src={image} alt='pvd <3 ptpt' />
    </div>
  );
}

export default CardImage;