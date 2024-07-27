import React, { useContext } from "react";
import Spinner from "../components/Spinner";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card"

function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="bg-[#433D8B] flex min-h-screen flex-row flex-wrap gap-x-3 justify-center items-center mt-0 ">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((posts) => <Card key={posts.id} posts={posts} />)
      )}
    </div>
  );
}

export default Blogs;
