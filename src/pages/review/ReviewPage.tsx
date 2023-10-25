import { useLocation } from "react-router-dom";

function ReviewPage() {
  const { state } = useLocation();
  const chosenRestaurant = state[0];

  return (
    <div className="flex flex-col px-4 my-8">
      <div className="relative">
        <img
          src={process.env.PUBLIC_URL + "/restaurant.jpeg"}
          alt="hero"
          className="w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black"></div>
      </div>
      <div className="max-w-xl mx-auto mt-15">
        <h1 className="font-bold text-4xl text-center pt-70">
          {chosenRestaurant.name}
        </h1>
        <div>
          {chosenRestaurant && (
            <div key={chosenRestaurant.restaurantId}>
              <p className="">{chosenRestaurant.intro}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
