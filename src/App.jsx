import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import { AppContext } from "./context/AppContext";

function App() {
  const { fetchBlogPost } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
  }, []);

  return (
    <>
      <Header />
      <Blogs />
      <Pagination />
    </>
  );
}

export default App;
