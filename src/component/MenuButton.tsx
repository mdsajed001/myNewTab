import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineDeleteOutline, MdCancel, MdLink } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "preact/hooks";
export const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [getBgImage, setGetBgImage] = useState(false);
  const [storKey, setStorKey] = useState("bg-image");
  // handle bg image
  const handleBgImage = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const bgImage = form.bgImage.value;
    localStorage.setItem(storKey, bgImage);
  };
  // remove bg image
  const removeFromLocal = (key: string) => {
    localStorage.removeItem(key);
  };
  return (
    <div className="absolute top-6 right-10">
      <button onClick={() => setShowMenu(!showMenu)} className="text-white">
        {showMenu ? <MdCancel /> : <CiMenuKebab />}
      </button>
      <div
        className={`absolute top-10 flex flex-col gap-2 right-0 bg-white rounded-lg p-2 ${
          !showMenu && "hidden"
        }`}
      >
        <button
          onClick={() => {
            setShowMenu(!showMenu);
            setGetBgImage(!getBgImage);
            setStorKey("bg-image");
          }}
          className="flex items-center gap-4 font-medium w-60 justify-center"
        >
          <AiOutlinePlus />
          <span className="w-40">New Background</span>
        </button>
        <button
          onClick={() => {
            setShowMenu(!showMenu);
            setGetBgImage(!getBgImage);
            setStorKey("secret-link");
          }}
          className="flex items-center gap-4 font-medium w-60 justify-center"
        >
          <MdLink />
          <span className="w-40">Secret Link</span>
        </button>
        <button
          onClick={() => {
            setShowMenu(!showMenu);
            removeFromLocal("bg-image");
          }}
          className="text-red-500 gap-4 flex items-center font-medium w-60 justify-center"
        >
          <MdOutlineDeleteOutline />
          <span className="w-40">Remove Background</span>
        </button>
        <button
          onClick={() => {
            setShowMenu(!showMenu);
            removeFromLocal("secret-link");
          }}
          className="text-red-500 gap-4 flex items-center font-medium w-60 justify-center"
        >
          <MdOutlineDeleteOutline />
          <span className="w-40">Remove Secret Link</span>
        </button>
      </div>
      <div
        className={`absolute top-10 right-0 rounded-lg bg-white ${
          !getBgImage && "hidden"
        }`}
      >
        <form onSubmit={handleBgImage} className="flex">
          <input
            className="p-2 rounded-l-lg outline-none text-orange-400"
            type="text"
            name="bgImage"
            id="bgImage"
          />
          <button
            onClick={() => setGetBgImage(!getBgImage)}
            className="bg-orange-500 rounded-l-lg hover:px-3 transition-all px-2 text-white font-medium"
          >
            Add
          </button>
          <div
            onClick={() => setGetBgImage(!getBgImage)}
            className="bg-red-500 rounded-r-lg hover:px-3 transition-all px-2 text-white font-medium cursor-pointer flex items-center justify-center"
          >
            <MdCancel />
          </div>
        </form>
      </div>
    </div>
  );
};
