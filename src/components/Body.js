import NewsBox from "./NewsBox";
import { useContext, useState } from "react";
import NewsContext from "../utils/NewsContext";
import Shimmer from "./Shimmer";

const Body = () => {
  const { news } = useContext(NewsContext);
  const { topic } = useContext(NewsContext);
  const { loading } = useContext(NewsContext);

  if (loading) {
    return (
      <div className="py-[2%] px-[6%]">
        <h1 className="font-semibold text-2xl w-9/12 m-auto mb-6 text-gray-300 bg-gray-300">
          {topic}
        </h1>
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="py-[2%] px-[6%]">
      <h1 className="font-semibold text-2xl w-9/12 m-auto mb-6">{topic}</h1>

      {/* Only news with image will be displayed */}
      {news
        .filter((data) => data.urlToImage != null)
        .map((data, index) => (
          <NewsBox key={index} newsData={data} />
        ))}
    </div>
  );
};

export default Body;
