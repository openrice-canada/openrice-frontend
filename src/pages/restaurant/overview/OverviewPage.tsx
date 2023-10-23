export function OverviewPage(): JSX.Element {
  return (
    <div className="px-32 mt-24">
      <div className="flex gap-8 font-semibold ">
        <img
          src={process.env.PUBLIC_URL + "/pictures/restaurantTestingImage.jpeg"}
          alt=""
          width={600}
        />
        <div>
          <div>name</div>
          <div>address</div>
          <div>price range</div>
          <div>price range</div>
        </div>
      </div>
    </div>
  );
}
