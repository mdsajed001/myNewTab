import { AddBookMark } from "./AddBookMark";
import { BookMarkModal } from "./BookMarkModal";
import { useState } from "preact/hooks";

export const BookMarks = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <AddBookMark showModal={showModal} setShowModal={setShowModal} />
      {showModal && (
        <BookMarkModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};
