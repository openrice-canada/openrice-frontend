import React from 'react'
import { Review } from '../../api/review/ReviewType'
import { IoRestaurant, IoChatbubbleEllipsesSharp, IoTime, IoStar, IoThumbsUpSharp, IoPerson } from 'react-icons/io5';
import { format } from 'date-fns';

type ReviewCardProps = Review;

const ReviewCard: React.FC<ReviewCardProps> = (props: ReviewCardProps) => {
    const ReviewRow = ({ text, icon }: { text: string, icon: React.ReactNode }) => (
        <div className='flex gap-2 items-center'>
                <div>{icon}</div>
                <h1 className='text-sm truncate'>{text}</h1>
        </div>
    )
  return (
    <a href={`/review/${props.reviewId}`} className='rounded-md shadow-lg'>
        <div className='flex flex-col gap-1 px-4 py-6'>
            <ReviewRow text={props.username} icon={<IoPerson/>} />
            <ReviewRow text={props.title} icon={<IoRestaurant/>} />
            <ReviewRow text={props.content} icon={<IoChatbubbleEllipsesSharp/>} />
            <div className='flex gap-2 items-start'>
                <div>{<IoThumbsUpSharp/>}</div>
                {
                  Array.from({length: props.rating}).map(() => (
                    <span className='text-yellow-400'>{<IoStar/>}</span>
                  ))
                }
            </div>
            <ReviewRow text={'Created at ' + format(new Date(props.createdAt), 'dd MMM yyyy HH:mm:ss')} icon={<IoTime/>} />
        </div>
    </a>
  )
}

export default ReviewCard