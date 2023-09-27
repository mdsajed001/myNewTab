import "./app.css";
import { FiSearch } from "react-icons/fi";
import { MenuButton } from "./component/MenuButton";
import { useEffect, useState } from "preact/hooks";

export function App() {
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
    setSecretLink(localStorage.getItem("secret-link"));
    setBgImage(localStorage.getItem("bg-image"));
    console.log(localStorage.getItem("bg-image"));
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`h-[100dvh] bg-center bg-cover w-screen ${
        !bgImage && "bg-zinc-800"
      }`}
    >
      <MenuButton />
      <form
        className="w-full h-full flex flex-col gap-6 justify-center items-center"
        onSubmit={handleSearch}
      >
        <h1 className="text-orange-500 font-semibold text-3xl h-10">
          Welcome to the{" "}
          <a
            href={`${secretLink}`}
            className="bg-orange-500 text-white rounded-lg p-2 hover:p-4 transition-all cursor-none hover:text-4xl"
          >
            Internet !
          </a>
        </h1>
        <div className="flex gap-2 w-full justify-center">
          <input
            ref={(input) => input && input.focus()}
            placeholder="Have a look around"
            className="p-2 text-lg outline-none bg-white rounded-lg placeholder:text-orange-300 text-orange-600 w-1/2"
            type="search"
            name="search"
            id="search"
          />
          <button className="bg-orange-500 text-lg p-2 rounded-lg text-white font-medium flex items-center gap-2">
            <span>Search</span>
            <FiSearch size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
