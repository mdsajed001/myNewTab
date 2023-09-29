import { useEffect, useState } from "preact/compat";

type editBookMarkPropType = {
  edit: boolean;
  setEdit: (show: boolean) => void;
  index: number;
};
export const EditBookMark = ({
  edit,
  setEdit,
  index,
}: editBookMarkPropType) => {
  // showing the default value
  const [currentData, setCurrentData] = useState({ url: "", title: "" });
  useEffect(() => {
    const existingBookmarksJSON = localStorage.getItem("bookmarks");

    if (existingBookmarksJSON) {
      let existingBookmarks = JSON.parse(existingBookmarksJSON);
      setCurrentData(existingBookmarks[index]);
    }
  }, []);
  // handle updating the local
  const handleUpdate = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.names.value;
    const link = form.link.value;

    const existingBookmarksJSON = localStorage.getItem("bookmarks");

    if (existingBookmarksJSON) {
      let existingBookmarks = JSON.parse(existingBookmarksJSON);
      const newBookmark = { title: name, url: link };
      existingBookmarks[index] = newBookmark;
      localStorage.setItem("bookmarks", JSON.stringify(existingBookmarks));
    }

    setEdit(!edit);
  };
  return (
    <>
      <div className="bg-white rounded-md p-2 flex flex-col gap-2 absolute top-0 right-0 z-50">
        <form onSubmit={handleUpdate} className="flex flex-col gap-2">
          <input
            className="p-2 border border-orange-500 rounded-md"
            defaultValue={currentData?.url}
            type="text"
            name="link"
          />
          <input
            className="p-2 border border-orange-500 rounded-md"
            defaultValue={currentData?.title}
            type="text"
            name="names"
          />
          <button>Update</button>
        </form>
      </div>
    </>
  );
};
