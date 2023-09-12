import Bookmark from './Bookmark';

const Bookmarks = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className='w-full lg:w-1/3 py-8'>
      <div className='border border-[#6047EC] bg-[#6047EC1A] rounded-lg'>
        <h1 className='text-2xl text-[#6047EC] font-bold leading-[38px] py-5 px-10'>
          Spent time on read : 177 min
        </h1>
      </div>
      <div className='allSingleBookmark mt-6 p-6 bg-[#1111110D] rounded-lg'>
        <h1 className='text-2xl font-bold leading-[38px] mb-4'>
          Bookmarked Blog: 8
        </h1>
        {arr.map((bookmark, index) => (
          <Bookmark key={index} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
