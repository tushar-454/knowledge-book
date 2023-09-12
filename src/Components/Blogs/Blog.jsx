import PropTypes from 'prop-types';
import BookmarkIcon from '../../assets/images/bookmark.svg';

const Blog = ({ blog, handleBookmark, handleReadTime }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className='py-8 border-b border-[#1111111A]'>
      <div className='coverImg w-full'>
        <img src={cover} className='w-full object-cover rounded-lg' />
      </div>
      <div className='authorInfoWrap flex justify-between'>
        <div className='authorInfo flex gap-4 py-4'>
          <div className='authorImg'>
            <img src={author_img} className='w-[60px]' />
          </div>
          <div className='authorNameDate'>
            <h1 className='text-2xl font-bold leading-[34.5px]'>{author}</h1>
            <p className='text-[#11111199] font-semibold leading-[38.4px]'>
              {posted_date}
            </p>
          </div>
        </div>
        <div className='readingTime flex items-start gap-2 py-4'>
          <p className='text-[#11111199] text-xl font-medium'>
            {reading_time} min read
          </p>
          <img
            src={BookmarkIcon}
            alt='bookmark'
            className='w-6 cursor-pointer'
            onClick={() => handleBookmark(title, reading_time)}
          />
        </div>
      </div>
      <div className='title'>
        <h1 className='text-3xl font-bold leading-[32px]'>{title}</h1>
      </div>
      <div className='hashtag flex gap-4 py-2'>
        {hashtags.map((hash, index) => (
          <a href='#' key={index} className='text-[#11111199]'>
            # {hash}
          </a>
        ))}
      </div>
      <div className='markAsRead'>
        <button
          className='text-[#6047EC] text-xl font-semibold underline'
          onClick={() => handleReadTime(reading_time)}
        >
          Mark As Read
        </button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmark: PropTypes.func,
  handleReadTime: PropTypes.func,
};
export default Blog;
