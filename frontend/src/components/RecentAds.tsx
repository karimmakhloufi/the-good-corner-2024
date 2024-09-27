import { useEffect, useState } from "react";
import axios from "axios";
import AdCard, { AdCardProps } from "./AdCard";

const RecentsAds = () => {
  const [ads, setAds] = useState<AdCardProps[]>([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<AdCardProps[]>(
        "http://localhost:3000/ads"
      );
      console.log("result", result);
      setAds(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Prix total: {total}</p>
      <section className="recent-ads">
        {ads.map((el) => (
          <div key={el.id}>
            <AdCard
              title={el.title}
              img_url={el.img_url}
              price={el.price}
              link={`/ad/${el.id}`}
            />
            <button
              className="button"
              onClick={() => {
                setTotal(total + el.price);
              }}
            >
              Add price to total
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default RecentsAds;
