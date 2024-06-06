import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider } from "react-router";
import { NEWS_API } from "./utils/constants";
import NewsContext from "./utils/NewsContext";

const AppLayout = () => {
  const [newsList, setNewsList] = useState([]);
  const [topic, setTopic] = useState("Trending");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true); // after Api call load shimmer
      const res = await fetch(
        NEWS_API +
          topic +
          "&language=en&apiKey=c6b03f43406a447592e1475722bd420e"
      );
      const data = await res.json();
      setNewsList(data.articles);
      setLoading(false); // after getting the data stop laoding shimmer
    })(); // Define and call function at one step
  }, [topic]);

  return (
    <NewsContext.Provider value={{ news: newsList, setTopic, topic, loading }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </NewsContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);
