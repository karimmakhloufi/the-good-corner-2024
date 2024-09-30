import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdCard, { AdCardProps } from "../components/AdCard";

const AdsByCategory = () => {
  const { name } = useParams();
  const [ads, setAds] = useState<AdCardProps[]>([]);
  useEffect(() => {
    const fetchAdsByCategory = async () => {
      const result = await axios.get(
        `http://localhost:3000/ads?category=${name}`
      );
      setAds(result.data);
    };
    fetchAdsByCategory();
  }, [name]);
  return (
    <>
      <section className="recent-ads">
        {ads.map((el) => (
          <div key={el.id}>
            <AdCard
              title={el.title}
              img_url={el.img_url}
              price={el.price}
              link={`/ad/${el.id}`}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default AdsByCategory;
