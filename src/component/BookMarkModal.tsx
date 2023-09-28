type BookMarkModalPropType = {
  setShowModal: (show: boolean) => void;
  showModal: boolean;
};
export const BookMarkModal = ({
  setShowModal,
  showModal,
}: BookMarkModalPropType) => {
  // save bookmark data in local
  const handleBookMark = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const links = form.links.value;
    const names = form.names.value;

    // Step 1: Retrieve the existing array of bookmarks from localStorage
    const existingBookmarksJSON = localStorage.getItem("bookmarks");

    // Step 2: Check if the array exists or initialize it as an empty array
    const existingBookmarks = existingBookmarksJSON
      ? JSON.parse(existingBookmarksJSON)
      : [];

    // Step 3: Add new bookmark data to the array
    const newBookmark = { title: names, url: links };
    existingBookmarks.push(newBookmark);

    // Step 4: Save the updated array back to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(existingBookmarks));
    setShowModal(!showModal);
  };
  return (
    <div className="absolute top-0 left-0 w-screen h-[100dvh] flex justify-center items-center">
      <div
        onClick={() => setShowModal(!showModal)}
        className="bg-slate-900/80 w-full h-full"
      ></div>
      <form
        onSubmit={handleBookMark}
        className="flex flex-col justify-center gap-4 p-4 bg-zinc-800 rounded-lg w-fit h-full z-50"
      >
        <input
          placeholder="Enter the URL"
          className="p-2 rounded-md outline-none"
          type="text"
          name="links"
          id="links"
          required
        />
        <input
          placeholder="Enter a name"
          className="p-2 rounded-md outline-none"
          type="text"
          name="names"
          id="names"
          required
        />
        <button className="p-2 rounded-md bg-orange-500 text-white font-medium">
          Mark it
        </button>
      </form>
    </div>
  );
};
