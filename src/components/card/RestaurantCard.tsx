import { Link } from "react-router-dom";
import { Restaurant } from "../../api/restaurant/RestaurantType";
import { IoLocation, IoReorderThree, IoRestaurant } from "react-icons/io5";

const RestaurantCard: React.FC<Restaurant> = (props: Restaurant) => {
  const RestaurantRow = ({
    text,
    icon,
  }: {
    text: string;
    icon: React.ReactNode;
  }) => (
    <div className="flex gap-2 items-start">
      <div>{icon}</div>
      <h1 className="text-sm truncate">{text}</h1>
    </div>
  );
  return (
    <Link
      to={`/restaurant/${props.restaurantId}`}
      className="rounded-md shadow-lg"
    >
      <img
        src={`${process.env.REACT_APP_IMAGE_PREFIX}/coverImageUrl/${props.restaurantId}.jpg`}
        alt={props.name}
        className="w-full h-48 object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="p-4">
        <RestaurantRow text={props.name} icon={<IoRestaurant />} />
        <RestaurantRow text={props.address} icon={<IoLocation />} />
        <RestaurantRow text={props.intro} icon={<IoReorderThree />} />
      </div>
    </Link>
  );
};

export default RestaurantCard;
