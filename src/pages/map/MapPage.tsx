import React, { useEffect } from "react";
import MapComponent from "../../components/map/MapComponent";
import { getRestaurantList } from "../../api/restaurant";
import { Restaurant } from "../../api/restaurant/type";

const MapPage = () => {
  const [restaurantList, setRestaurantList] = React.useState<Restaurant[]>([]);

  const fetchRestaurantList = async () => {
    const data = await getRestaurantList();
    setRestaurantList(data);
  };

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  return (
    <MapComponent
      coordinates={restaurantList
        .filter((restaurant) => restaurant.latitude && restaurant.longitude)
        .map((restaurant) => ({
            name: restaurant.name,
            latitude: parseFloat(restaurant.latitude),
            longitude: parseFloat(restaurant.longitude),
        }))}
    />
  );
};

export default MapPage;
