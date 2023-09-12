import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className='w-full lg:w-1/3 py-8'>
      <div className='border border-[#6047EC] bg-[#6047EC1A] rounded-lg'>
        <h1 className='text-2xl text-[#6047EC] font-bold leading-[38px] py-5 px-10'>
          Spent time on read : {readingTime} min
        </h1>
      </div>
      <div
        className={`allSingleBookmark mt-6 p-6 bg-[#1111110D] rounded-lg h-[500px] overflow-y-auto lg:h-auto lg:overflow-y-auto ${
          bookmarks.length > 35 ? 'lg:h-[3240px]' : 'lg:h-auto'
        }`}
      >
        <h1 className='text-2xl font-bold leading-[38px] mb-4'>
          Bookmarked Blog: {bookmarks.length}
        </h1>
        {bookmarks.map((title, index) => (
          <Bookmark key={index} title={title} />
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
