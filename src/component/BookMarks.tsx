import { AddBookMark } from "./AddBookMark";
import { BookMarkModal } from "./BookMarkModal";
import { useState } from "preact/hooks";
import { FastLink } from "./FastLink";

type fastLinkType = {
  title: string;
  url: string;
};

export const BookMarks = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAddBM, setShowAddBM] = useState<number>(0);

  const existingBookmarksJSON = localStorage.getItem("bookmarks");
  const existingBookmarks = existingBookmarksJSON
    ? JSON.parse(existingBookmarksJSON)
    : [];
  setShowAddBM(existingBookmarks.length);
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center w-96">
      {existingBookmarks.map((item: fastLinkType, index: number) => (
        <FastLink key={index} index={index} item={item} />
      ))}
      {showAddBM < 10 && (
        <AddBookMark showModal={showModal} setShowModal={setShowModal} />
      )}
      {showModal && (
        <BookMarkModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};
