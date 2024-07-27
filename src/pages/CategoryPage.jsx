import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import BackButton from "../components/BackButton";

function CategoryPage() {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className="bg-[#433D8B]">
        <BackButton category={category}/>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default CategoryPage;
