import { Review } from "../../api/review/ReviewType";
import { Controller, useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import TextInput from "../Input/TextInput";

type AddReviewModalProps = {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  formRef: React.MutableRefObject<HTMLDivElement | null>;
};

const addReview = async (review: Review) => {
  // TODO
  console.log(review);
};

const AddReviewModal: React.FC<AddReviewModalProps> = (
  props: AddReviewModalProps
) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {} as Review,
  });

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
              className="w-full gap-6 flex flex-col"
              onSubmit={handleSubmit((review) => addReview(review))}
            >
              <Controller
                control={control}
                name="title"
                defaultValue=""
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
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    value={field.value}
                    onChange={field.onChange}
                    label="Content"
                    type="text"
                    placeholder="Type something"
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
