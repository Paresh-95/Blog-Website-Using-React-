import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import Card from "../components/Card"
import Header from "../components/Header"
import LargeCard from "../components/LargeCard";
import BackButton from "../components/BackButton";


function BlogPage() {
  const newBaseUrl = 'https://codehelp-apis.vercel.app/api/';
  const { setLoading, loading } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    const url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
  
    } catch (error) {
      console.log("Error loading blogs");
      setBlog(null);
      setRelatedBlog([]);
    }
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <BackButton blog={blogId}/>
      {loading ? (
        <Spinner />
      ) : blog ?(
        <div className="bg-[#433D8B] ">
          <div className="flex flex-col items-center justify-center">
          <LargeCard posts={blog} />
          </div>
          <h2 className=" m-3 text-3xl text-[#FAF0E6] font-bold text-center p-5">Related Blogs</h2>
          <div className=" flex min-h-screen flex-row flex-wrap gap-x-3 justify-center items-center ">
          {relatedBlog.map((post) => (
            <div key={post.id}>
              <Card posts={post} />
            </div>
          ))}
          </div>
        </div>
      ):(<div><p>No Blog Found </p></div>)
      }
    </div>
  );
}

export default BlogPage;
