import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetail } from "../../api/restaurant";
import { Restaurant } from "../../api/restaurant/RestaurantType";
import { getReviewListByRestaurantId } from "../../api/review";
import { Review } from "../../api/review/ReviewType";
import ReviewCard from "../../components/card/ReviewCard";

export function OverviewPage(): JSX.Element {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState<Restaurant>();
  const [reviewList, setReviewList] = useState<Review[]>([]);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      if (!id) return;
      const data = await getRestaurantDetail(id);
      setRestaurantDetail(data);
    };
    const fetchRestaurantReview = async () => {
      if (!id) return;
      const data = await getReviewListByRestaurantId(id);
      setReviewList(data);
    }
    fetchRestaurantDetail();
    fetchRestaurantReview();
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-4 gap-8 font-semibold ">
        <div className="col-span-1 relative w-60 rounded-md overflow-hidden">
          <img
            src={process.env.PUBLIC_URL + "/pictures/restaurantTestingImage.jpeg"}
            alt=""
            width='object-cover'
          />
        </div>
        <div className="col-span-3">
          <h1 className="text-2xl font-bold">{restaurantDetail?.name}</h1>
          <div className="text-lg font-semibold">{restaurantDetail?.address}</div>
          <p className="text-sm text-gray-600">{restaurantDetail?.intro}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center my-4">
        <h1 className="text-2xl font-bold">Review</h1>
        <button type='button' className="bg-slate-600 text-white px-2 py-1 rounded-md">
          Add Review
        </button>
      </div>
      {
        reviewList.length === 0 && <div>No review in this restaurant</div>
      }
      {
        reviewList.length > 0 &&
        <div className="grid grid-cols-1 gap-4">
        {
          reviewList.map((review) => (
            <ReviewCard {...review} />
          ))
        }
      </div>}
    </div>
  );
}
