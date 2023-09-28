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

  const existingBookmarksJSON = localStorage.getItem("bookmarks");
  const existingBookmarks = existingBookmarksJSON
    ? JSON.parse(existingBookmarksJSON)
    : [];

  return (
    <div className="flex flex-wrap gap-6 items-center justify-center w-96">
      {existingBookmarks.map((item: fastLinkType, index: number) => (
        <FastLink key={index} item={item} />
      ))}
      <AddBookMark showModal={showModal} setShowModal={setShowModal} />
      {showModal && (
        <BookMarkModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};
