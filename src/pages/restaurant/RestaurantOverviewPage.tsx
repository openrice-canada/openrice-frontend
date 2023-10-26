/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetail } from "../../api/restaurant";
import { Restaurant } from "../../api/restaurant/RestaurantType";
import { IoBookmarkOutline, IoChatbubbleOutline } from "react-icons/io5";
import { OverviewButton } from "../../components/button/OverviewButton";
import { uploadImage } from "../../components/utils/imageService";

function isUUID(id: string) {
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidPattern.test(id);
}

const RestaurantOverviewPage: React.FC = () => {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState<Restaurant>();
  const [page, setPage] = useState("Reviews");
  const [image, setImage] = useState<null | File>(null);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      if (!id || !isUUID(id)) return;
      const data = await getRestaurantDetail(id);
      if (data) {
        setRestaurantDetail(data);
      }
    };

    fetchRestaurantDetail();
  }, [id]);

  const buttons = ["Reviews", "Photos", "Menus"];
  const imageUpload = (e: any) => {
    e.preventDefault();
    if (image && id) {
      uploadImage(image, id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-3">
      <div className="flex font-semibold justify-between">
        <div className="flex gap-8">
          <div className="relative w-[400px] h-auto">
            <img
              src={
                process.env.PUBLIC_URL + "/pictures/restaurantTestingImage.jpeg"
              }
              alt=""
              width="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">abc{restaurantDetail?.name}</h1>
            <div>{restaurantDetail?.rating}</div>
            <div className="text-lg font-semibold">
              abc {restaurantDetail?.address}
            </div>
            <div>c{restaurantDetail?.intro}</div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-50">
            <IoBookmarkOutline size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-50">
            <IoChatbubbleOutline size={20} />
          </button>
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
          <form onSubmit={imageUpload}>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
            />
            <button name="submit">Submit</button>
          </form>
          <div id="imageContainer"></div>
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
  );
};

export default RestaurantOverviewPage;
