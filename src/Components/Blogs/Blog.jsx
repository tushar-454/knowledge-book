import PropTypes from 'prop-types';

const Blog = ({ blog, handleBookmark, handleReadTime, bookmarks }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  const isBookmark = bookmarks.includes(title);
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            className='w-6 cursor-pointer active:scale-90 transition'
            onClick={() => handleBookmark(title)}
          >
            <path
              fill={isBookmark ? 'blue' : 'white'}
              d='M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z'
              stroke='#111111'
              strokeOpacity='0.6'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
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
  bookmarks: PropTypes.array,
};
export default Blog;
