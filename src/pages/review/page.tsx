import { useLocation } from "react-router-dom";
import { getRestaurantList } from "../../api/restaurant";
import { Restaurant } from "../../api/restaurant/type";
import { HomePage } from "../../pages/HomePage";

function ReviewPage() {
    const {state} = useLocation();
    console.log(state);
    return(
        <div className="max-w-6xl mx-auto px-4 my-4">
            <h1 className="text-center font-bold text-2xl">Latest Restaurants</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {state.map((restaurant:Restaurant) => (
                <div key={restaurant.restaurantId}>{restaurant.name}</div>
            ))}
            </div>
        </div>
    )
}

export default ReviewPage;