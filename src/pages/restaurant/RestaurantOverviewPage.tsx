import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetail } from "../../api/restaurant";
import { Restaurant } from "../../api/restaurant/RestaurantType";
import { IoBookmarkOutline, IoChatbubbleOutline } from "react-icons/io5";
import RestaurantOverviewButton from "../../components/button/RestaurantOverviewButton";
import ReviewCard from "../../components/card/ReviewCard";
import { Review } from "../../api/review/ReviewType";
import { getReviewListByRestaurantId } from "../../api/review";
import AddReviewModal from "../../components/modal/AddReviewModal";
import RestaurantDetailSkeletonLoader from "../../components/loader/RestaurantDetailSkeletonLoader";

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

    const fetchRestaurantReview = async () => {
      if (!id || !isUUID(id)) return;
      const data = await getReviewListByRestaurantId(id);
      setReviews(data);
    };

    fetchRestaurantDetail();
    fetchRestaurantReview();
  }, [id]);

  const buttons = ["Reviews", "Photos", "Menus"];
  if (!restaurantDetail) return null;
  // const imageUpload = (e: any) => {
  //   e.preventDefault();
  //   if (image && id) {
  //     uploadImage(image, id);
  //   }
  // };

  return (
    <>
      <AddReviewModal
        isShown={isShownAddReviewModal}
        setIsShown={setIsShownAddReviewModal}
      />
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex font-semibold justify-between">
          <div className="flex gap-8 pr-1">
            <div className="relative w-[400px] h-auto shrink-0">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/pictures/restaurantTestingImage.jpeg"
                }
                alt=""
                width="object-cover"
              />
            </div>
            {!restaurantDetail ? (
              <RestaurantDetailSkeletonLoader />
            ) : (
              <div>
                <h1 className="text-2xl font-bold">{restaurantDetail.name}</h1>
                <div>{restaurantDetail.rating}</div>
                <div className="text-lg font-semibold">
                  {restaurantDetail?.address}
                </div>
                <div>{restaurantDetail.intro}</div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            {/* <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-50">
              <IoBookmarkOutline size={20} />
            </button> */}
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-50"
              onClick={() => setIsShownAddReviewModal(true)}
            >
              <IoChatbubbleOutline size={20} />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-16">
            {buttons.map((button, index) => (
              <RestaurantOverviewButton
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
            <div className="flex gap-4 items-center my-4">
              <h1 className="text-2xl font-bold">Review</h1>
              <button
                type="button"
                className="bg-slate-600 text-white px-2 py-1 rounded-md"
              >
                Add Review
              </button>
            </div>
            {reviews.length === 0 && <div>No review in this restaurant</div>}
            {reviews.length > 0 && (
              <div className="grid grid-cols-1 gap-4">
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
