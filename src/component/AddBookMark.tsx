import { IoAddOutline } from "react-icons/io5";

type AddBookMarkPropType = {
  setShowModal: (show: boolean) => void;
  showModal: boolean;
};

export const AddBookMark = ({
  showModal,
  setShowModal,
}: AddBookMarkPropType) => {
  return (
    <button
      onClick={() => setShowModal(!showModal)}
      className="text-orange-500 text-2xl font-extrabold rounded-md w-12 h-12 flex items-center justify-center border-2 border-orange-500"
    >
      <IoAddOutline />
    </button>
  );
};
