import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import SearchForm from "./components/searchForm/SearchForm";
import SearchResultLayout from "./layouts/searchResultLayout/SearchResultLayout";
import FilterResult from "./components/filterResult/FilterResult";
import SearchResult from "./components/searchResult/SearchResult";
import SearchResultPage from "./pages/SearchResultPage";
import BookDetailPage from "./pages/BookDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/search",
        element: <SearchResultPage />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
