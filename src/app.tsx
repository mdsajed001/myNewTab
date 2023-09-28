import "./app.css";
import { FiSearch } from "react-icons/fi";
import { MenuButton } from "./component/MenuButton";
import { useEffect, useRef, useState } from "preact/hooks";
import { BookMarks } from "./component/BookMarks";

export function App() {
  // used search ref
  const searchRef = useRef<HTMLInputElement>(null);
  const [secretLink, setSecretLink] = useState<null | string>("");
  // search handler
  const searchUrl = "https://www.google.com/search?q=";
  const handleSearch = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const search = form.search.value;
    window.location.href = `${searchUrl + search}`;
  };
  // onload handle
  const [bgImage, setBgImage] = useState<string | null>("");
  useEffect(() => {
    searchRef.current?.focus();
    setSecretLink(localStorage.getItem("secret-link"));
    setBgImage(localStorage.getItem("bg-image"));
    console.log(localStorage.getItem("bg-image"));
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`h-[100dvh] bg-center bg-cover w-screen flex flex-col gap-12 items-center justify-center ${
        !bgImage && "bg-zinc-800"
      }`}
    >
      <MenuButton />
      <h1 className="text-orange-500 font-semibold text-3xl h-10">
        Welcome to the{" "}
        <a
          href={`${secretLink}`}
          className="bg-orange-500 text-white rounded-lg p-2 hover:p-4 transition-all cursor-none hover:text-4xl"
        >
          Internet !
        </a>
      </h1>
      <form
        className="w-full flex flex-col gap-6 justify-center items-center"
        onSubmit={handleSearch}
      >
        <div className="flex gap-2 w-full justify-center">
          <input
            ref={searchRef}
            placeholder="Have a look around"
            className="p-2 px-3 text-lg outline-none bg-white rounded-lg placeholder:text-orange-500 text-orange-600 w-1/2"
            type="search"
            name="search"
            id="search"
          />
          <button className="bg-orange-500 text-lg p-2 px-3 rounded-lg text-white font-medium flex items-center gap-2">
            <span>Search</span>
            <FiSearch size={20} />
          </button>
        </div>
      </form>
      <BookMarks />
    </div>
  );
}
