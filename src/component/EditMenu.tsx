import { useState } from "preact/hooks";
import { EditBookMark } from "./EditBookMark";

type EditMenuPropType = {
  showEditMenu: boolean;
  index: number;
};
export const EditMenu = ({ showEditMenu, index }: EditMenuPropType) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleDelete = () => {
    const existingBookmarksJSON = localStorage.getItem("bookmarks");

    if (existingBookmarksJSON) {
      let existingBookmarks = JSON.parse(existingBookmarksJSON);

      // Remove the element at the specified index
      existingBookmarks.splice(index, 1);

      // Update localStorage with the modified array
      localStorage.setItem("bookmarks", JSON.stringify(existingBookmarks));
    }
  };
  return (
    <>
      {edit && <EditBookMark edit={edit} setEdit={setEdit} index={index} />}
      {showEditMenu && (
        <div className="bg-white rounded-md p-2 flex flex-col gap-2">
          <button onClick={() => setEdit(!edit)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  );
};
