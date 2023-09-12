import { useEffect, useState } from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('Blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className='mainWraper flex flex-col-reverse gap-8 lg:flex-row'>
        <div className='w-full lg:w-2/3'>
          <div className='blogsWrap'>
            {/* all blog here by fetch */}
            {blogs.map((blog, index) => (
              <Blog key={index} blog={blog} />
            ))}
          </div>
        </div>
        <Bookmarks />
      </div>
    </>
  );
};

export default Blogs;
