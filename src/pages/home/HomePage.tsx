import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../../components/Input/SearchInput";
import { getRestaurantList } from "../../api/restaurant";
import { Restaurant } from "../../api/restaurant/RestaurantType";

export default function HomePage(): JSX.Element {
  const { control, handleSubmit } = useForm();
  // const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);

  // const fetchRestaurantList = async () => {
  //   const data = await getRestaurantList();
  //   setRestaurantList(data);
  // };

  useEffect(() => {
    // fetchRestaurantList();
  }, []);

  return (
    <div>
      <form
        className="relative h-screen flex justify-center items-center"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <img
          src={process.env.PUBLIC_URL + "/hero.jpg"}
          alt="hero"
          className="absolute top-0 left-0 w-full h-full z-[-10] brightness-75"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-6xl text-4xl font-bold text-[#FFFFFF] text-center drop-shadow-xl mb-12">
            Discovered Restaurant <br />& Delicious Food
          </h1>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SearchInput
                type="text"
                placeholder="tacos, pizza, chinese"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>
      </form>
      <div className="max-w-6xl mx-auto px-4 my-4">
        <h1 className="text-center font-bold text-2xl">Latest Restaurants</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {restaurantList.map((restaurant) => (
            <div key={restaurant.restaurantId}>{restaurant.name}</div>
          ))}
          <Link to="/review" state={restaurantList}>
            <button>link</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
