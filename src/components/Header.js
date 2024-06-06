import { useContext, useState } from "react";
import NewsContext from "../utils/NewsContext";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const { setTopic } = useContext(NewsContext);

  const handleClick = (topicName) => {
    setTopic(topicName);
  };
  return (
    <div className="flex items-center justify-between py-2 px-6 shadow-md bg-white">
      <div className="flex items-center">
        <div className="w-12">
          <img
            src="https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <ul className="flex items-center m-4 font-semibold">
          <li className="mx-4 cursor-pointer">
            <button onClick={(e) => handleClick("Trending")}>Trending</button>
          </li>
          <li className="mx-4 cursor-pointer">
            <button onClick={(e) => handleClick(e.target.innerHTML)}>
              Health
            </button>
          </li>
          <li className="mx-4 cursor-pointer">
            <button onClick={(e) => handleClick(e.target.innerHTML)}>
              Business
            </button>
          </li>
          <li className="mx-4 cursor-pointer">
            <button onClick={(e) => handleClick(e.target.innerHTML)}>
              Technology
            </button>
          </li>
          <li className="mx-4 cursor-pointer">
            <button onClick={(e) => handleClick(e.target.innerHTML)}>
              Sports
            </button>
          </li>
        </ul>
      </div>
      <div>
        <input
          type="text"
          className="border border-zinc-400 py-2 rounded w-72 font-semibold px-3"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="font-semibold py-2 px-4 border ml-1 rounded bg-black text-white"
          onClick={(e) => handleClick(searchText)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
