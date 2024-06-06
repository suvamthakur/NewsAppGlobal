import { Link } from "react-router-dom";

const NewsBox = ({ newsData }) => {
  const { title, description, urlToImage, publishedAt, author, url } = newsData;
  return (
    <Link to={url}>
      <div className="flex border-b border-gray-300 px-4 py-6 rounded-md w-9/12 h-64 m-auto bg-white">
        <div className="w-4/12 h-full">
          <img
            src={urlToImage}
            alt="Not available"
            className="rounded-md w-full h-full"
          />
        </div>
        <div className="ml-4 w-8/12 self-start">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="mt-3 text-gray-800">{description}</p>
          <p className="font-semibold mt-3">
            {publishedAt.slice(0, 10)} ▪ {author}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsBox;
