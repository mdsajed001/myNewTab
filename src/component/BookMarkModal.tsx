type BookMarkModalPropType = {
  setShowModal: (show: boolean) => void;
  showModal: boolean;
};
export const BookMarkModal = ({
  setShowModal,
  showModal,
}: BookMarkModalPropType) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-[100dvh] flex justify-center items-center">
      <div
        onClick={() => setShowModal(!showModal)}
        className="bg-slate-900/80 w-full h-full"
      ></div>
      <form className="flex flex-col justify-center gap-4 p-4 bg-zinc-800 rounded-lg w-fit h-full z-50">
        <input
          placeholder="Enter the URL"
          className="p-2 rounded-md outline-none"
          type="text"
          name="link"
          id="link"
        />
        <input
          placeholder="Enter a name"
          className="p-2 rounded-md outline-none"
          type="text"
          name="name"
          id="name"
        />
        <button className="p-2 rounded-md bg-orange-500 text-white font-medium">
          Mark it
        </button>
      </form>
    </div>
  );
};
