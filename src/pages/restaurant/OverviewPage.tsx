import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetail } from "../../api/restaurant";
import { Restaurant } from "../../api/restaurant/RestaurantType";

export function OverviewPage(): JSX.Element {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState<Restaurant>();

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      if (!id) return;
      const data = await getRestaurantDetail(id);
      setRestaurantDetail(data);
    };
    fetchRestaurantDetail();
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-4 gap-8 font-semibold ">
        <div className="col-span-1 relative w-60 h-60">
          <img
            src={process.env.PUBLIC_URL + "/pictures/restaurantTestingImage.jpeg"}
            alt=""
            width='object-cover'
          />
        </div>
        <div className="col-span-3">
          <h1 className="text-2xl font-bold">{restaurantDetail?.name}</h1>
          <div className="text-lg font-semibold">{restaurantDetail?.address}</div>
          <div>{restaurantDetail?.intro}</div>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Review</h1>
      {/* 
        // TODO display Review list here (use ReviewPage.tsx)
        // TODO create an api to get review list by restaurant id 
      */}
    </div>
  );
}
