import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserList } from "../../api/user";
import { User } from "../../api/user/UserType";

function ReviewPage() {
  const { state } = useLocation();
  const chosenRestaurant = state[0];
  const [userList, setUserList] = useState<User[]>([]);
  const fetchUserList = async () => {
    const data = await getUserList();
    setUserList(data);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

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
        <div className="flex mt-3">
          {userList.map((user) => (
            <div key={user.userId}>
              <p>{user.username}</p>
              <div className="text-center">
                <textarea className="border border-black px-3 py-2 rounded-md max-w-xl w-full h-40"></textarea>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
