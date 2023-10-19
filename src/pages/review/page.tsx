import { useLocation } from "react-router-dom";

function ReviewPage() {
    const { state } = useLocation();
    console.log(state);
    const chosenRestaurant = state[0]; // should be updated to retrieve the chosen restaurant in the home page.

    return (
        <div className="max-w-6xl mx-auto px-4 my-8">
            <h1 className="text-center font-bold text-2xl my-20">{chosenRestaurant.name}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto"> {/* Add mx-auto here */}
                {chosenRestaurant && (
                    <div key={chosenRestaurant.restaurantId} className="text-center">
                        <p className="">{chosenRestaurant.intro}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ReviewPage;
