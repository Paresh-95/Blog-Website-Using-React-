import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import BackButton from '../components/BackButton';

function TagPage() {

  const location = useLocation();
  const tag = location.pathname.split("/").at(-1)
  console.log(tag);
  return (
    <div>
      <Header />
      <div className="bg-[#433D8B]">
        <BackButton tag={tag}/>
        <Blogs />
        <Pagination />
      </div>
    </div>
  )
}

export default TagPage