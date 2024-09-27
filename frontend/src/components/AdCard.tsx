export type AdCardProps = {
  id?: number;
  title: string;
  img_url: string;
  price: number;
  link: string;
};

const AdCard = ({ title, img_url, price, link }: AdCardProps) => {
  return (
    <div className="ad-card-container">
      <a className="ad-card-link" href={link}>
        <img className="ad-card-image" src={img_url} />
        <div className="ad-card-text">
          <div className="ad-card-title">{title}</div>
          <div className="ad-card-price">{price} €</div>
        </div>
      </a>
    </div>
  );
};
export default AdCard;
