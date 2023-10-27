import { Controller, useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import TextInput from "../Input/TextInput";
import { postReview } from "../../api/review";
import { useContext } from "react";
import { UserContext } from "../../App";
import { TextareaInput } from "../Input/TextareaInput";
import { useNavigate } from "react-router-dom";
import NumberInput from "../Input/NumberInput";

type AddReviewModalProps = {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  formRef: React.MutableRefObject<HTMLDivElement | null>;
  restaurantId?: string;
};

type ReviewForm = {
  rating: number;
  title: string;
  visitDate: string;
  content: string;
  spending: number;
}

const AddReviewModal: React.FC<AddReviewModalProps> = (
  props: AddReviewModalProps
) => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      content: '',
      spending: 0,
      rating: 0,
      visitDate: '',
    } as ReviewForm,
  });

  const addReview = async (review: ReviewForm) => {
    await postReview({
      ...review,
      restaurantId: props?.restaurantId as string,
      userId: context?.userInfo?.userId as string,
      visitDate: new Date(review.visitDate),
    });
    navigate(`/restaurant/${props?.restaurantId}`)
    navigate(0)
  };

  if (!props.isShown) return null;
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      <div className="relative w-1/4 min-w-[400px] my-6 mx-auto z-40">
        {/*content*/}
        <div
          className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          ref={props.formRef}
        >
          <div className="flex items-center justify-between p-2 px-4 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-lg font-semibold">Add Review</h3>
            <button
              className="p-2 ml-auto text-black float-right text-3xl leading-none font-semibold outline-none rounded-full hover:bg-gray-200 focus:outline-none"
              onClick={() => props.setIsShown(false)}
            >
              <span className="bg-transparent text-black text-2xl block outline-none focus:outline-none">
                <IoClose size={20} />
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex flex-col items-center gap-6 overflow-auto">
            <form
              className="w-full gap-2 flex flex-col"
              onSubmit={handleSubmit((review) => addReview(review))}
            >
              <Controller
                control={control}
                name="title"
                render={({ field }) => (
                  <TextInput
                    value={field.value}
                    onChange={field.onChange}
                    label="Title"
                    type="text"
                    placeholder="Title"
                  />
                )}
              />
              <Controller
                control={control}
                name="content"
                render={({ field }) => (
                  <TextareaInput
                    value={field.value}
                    onChange={field.onChange}
                    label="Content"
                    type="text"
                    placeholder="Type something"
                    className="border border-gray-400 rounded-md p-2 text-sm"
                  />
                )}
              />
              <Controller
                control={control}
                name='rating'
                render={({ field }) => (
                  <NumberInput
                    label='Rating'
                    step='1'
                    placeholder='Rating from 1 to 5'
                    value={field.value}
                    onChange={field.onChange}
                    min={1}
                    max={5}
                  />
                )}
              />
              <Controller
                control={control}
                name='spending'
                render={({ field }) => (
                  <NumberInput
                    label='Spending'
                    step='10'
                    placeholder='How much did you spend?'
                    value={field.value}
                    onChange={field.onChange}
                    min={0}
                    max={10000}
                  />
                )}
              />
              <Controller
                control={control}
                name='visitDate'
                render={({ field }) => (
                  <TextInput
                    value={field.value}
                    onChange={field.onChange}
                    label='Visit Date'
                    type='date'
                    placeholder=''
                  />
                )}
              />
              <button
                type="submit"
                className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;
