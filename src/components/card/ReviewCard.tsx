import { Link } from "react-router-dom";
import { Review } from "../../api/review/ReviewType";
import {
  IoRestaurant,
  IoChatbubbleEllipsesSharp,
  IoTime,
  IoThumbsUpSharp,
  IoStar,
} from "react-icons/io5";
import { format } from "date-fns";

type ReviewCardProps = Review;

const ReviewRow = ({ text, icon }: { text: string, icon: React.ReactNode }) => (
  <div className='flex gap-2 items-center'>
          <div>{icon}</div>
          <h1 className='text-sm truncate'>{text}</h1>
  </div>
)

const ReviewCard: React.FC<ReviewCardProps> = (props: ReviewCardProps) => {
  return (
    <Link to={`/review/${props.reviewId}`} className="rounded-md shadow-lg">
      <div className="flex flex-col gap-1 px-4 py-6">
        <ReviewRow text={props.title} icon={<IoRestaurant />} />
        <ReviewRow text={props.content} icon={<IoChatbubbleEllipsesSharp />} />
        <ReviewRow text={props.createdAt} icon={<IoTime />} />
        <div className="flex gap-2 items-start">
          <div>{<IoThumbsUpSharp />}</div>
          {Array.from({ length: props.rating }).map(() => (
            <span className="text-yellow-400">{<IoStar />}</span>
          ))}
        </div>
        <ReviewRow
          text={
            "Created at " +
            format(new Date(props.createdAt), "dd MMM yyyy HH:mm:ss")
          }
          icon={<IoTime />}
        />
      </div>
    </Link>
  );
};

export default ReviewCard;
