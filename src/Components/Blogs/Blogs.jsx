import { useEffect, useState } from 'react';
import {
  addArrDataLS,
  addReadTimeLS,
  getArrDataLS,
  getNumDataLS,
} from '../../Utils/LocalStorage';
import Bookmarks from '../Bookmarks/Bookmarks';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  useEffect(() => {
    fetch('Blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  useEffect(() => {
    const getStoreBookmark = getArrDataLS('bookmarks');
    const getStorereadingTime = getNumDataLS('readingTime');
    setBookmarks(getStoreBookmark);
    setReadingTime(getStorereadingTime);
  }, []);
  const handleBookmark = (title) => {
    setBookmarks([...bookmarks, title]);
    addArrDataLS('bookmarks', title);
  };
  const handleReadTime = (reading_time) => {
    setReadingTime(readingTime + reading_time);
    addReadTimeLS('readingTime', reading_time);
  };
  return (
    <>
      <div className='mainWraper flex flex-col-reverse gap-8 lg:flex-row'>
        <div className='w-full lg:w-2/3'>
          <div className='blogsWrap'>
            {/* all blog here by fetch */}
            {blogs.map((blog, index) => (
              <Blog
                key={index}
                blog={blog}
                handleBookmark={handleBookmark}
                handleReadTime={handleReadTime}
              />
            ))}
          </div>
        </div>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
};

export default Blogs;
