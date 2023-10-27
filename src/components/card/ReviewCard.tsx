import { Link } from "react-router-dom";
import { Review } from "../../api/review/ReviewType";
import {
  IoRestaurant,
  IoChatbubbleEllipsesSharp,
  IoTime,
} from "react-icons/io5";

type ReviewCardProps = Review;

const ReviewCard: React.FC<ReviewCardProps> = (props: ReviewCardProps) => {
  const ReviewRow = ({
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
    <Link to={`/review/${props.reviewId}`} className="rounded-md shadow-lg">
      <div className="flex flex-col gap-1 px-4 py-6">
        <ReviewRow text={props.title} icon={<IoRestaurant />} />
        <ReviewRow text={props.content} icon={<IoChatbubbleEllipsesSharp />} />
        <ReviewRow text={props.createdAt} icon={<IoTime />} />
      </div>
    </Link>
  );
};

export default ReviewCard;
