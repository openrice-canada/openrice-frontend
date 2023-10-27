import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetail } from "../../api/restaurant";
import { Restaurant } from "../../api/restaurant/RestaurantType";
import { IoBookmarkOutline, IoChatbubbleOutline } from "react-icons/io5";
import { OverviewButton } from "../../components/button/OverviewButton";
import ReviewCard from "../../components/card/ReviewCard";
import { Review } from "../../api/review/ReviewType";
import { getReviewListByRestaurantId } from "../../api/review";
import AddReviewModal from "../../components/modal/AddReviewModal";

function isUUID(id: string) {
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidPattern.test(id);
}

const RestaurantOverviewPage: React.FC = () => {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState<Restaurant>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState("Reviews");
  const [isShownAddReviewModal, setIsShownAddReviewModal] = useState(false);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      if (!id || !isUUID(id)) return;
      const data = await getRestaurantDetail(id);
      if (data) {
        setRestaurantDetail(data);
      }
    };
    const fetchReviews = async () => {
      if (!id || !isUUID(id)) return;
      const data = await getReviewListByRestaurantId(id);
      if (data) {
        setReviews(data);
      }
    };
    fetchRestaurantDetail();
    fetchReviews();
  }, [id]);

  const buttons = ["Reviews", "Photos", "Menus"];

  if (!restaurantDetail) return null;

  return (
    <>
      <AddReviewModal isShown={isShownAddReviewModal} setIsShown={setIsShownAddReviewModal} />
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex font-semibold justify-between">
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="w-[200px] rounded-md overflow-hidden">
              <img
                src={
                  `${process.env.REACT_APP_IMAGE_PREFIX}/${restaurantDetail?.restaurantId}.jpg`
                }
                alt="restaurant cover image"
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {restaurantDetail?.name}
              </h1>
              <div>{restaurantDetail?.rating}</div>
              <p className="text-lg font-semibold">
                {restaurantDetail?.address}
              </p>
              <p className="w-96 text-xs">{restaurantDetail?.intro}</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-50">
              <IoBookmarkOutline size={20} />
            </button>
            <div className="relative group">
              <button
                type='button'
                onClick={() => setIsShownAddReviewModal(true)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-50">
                <IoChatbubbleOutline size={20} />
              </button>
              <p className="absolute top-12 text-xs whitespace-nowrap -left-1/2 bg-black text-white px-2 py-1 rounded-md invisible group-hover:visible">
                Add Review
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-16">
            {buttons.map((button, index) => (
              <OverviewButton
                button={button}
                key={index}
                active={page === button}
                setActive={setPage}
              />
            ))}
          </div>
        </div>
        {page === "Reviews" && (
          <>
            {reviews.length === 0 && <div>No review in this restaurant</div>}
            {reviews.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-4">
                {reviews.map((review) => (
                  <ReviewCard {...review} />
                ))}
              </div>
            )}
          </>
        )}
        {page === "Photos" && (
          <>
            {
              //TODO
            }
          </>
        )}
        {page === "Menus" && (
          <>
            {
              //TODO
            }
          </>
        )}
      </div>
    </>
  );
};

export default RestaurantOverviewPage;
