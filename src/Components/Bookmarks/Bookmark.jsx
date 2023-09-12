import PropTypes from 'prop-types';
const Bookmark = ({ title }) => {
  return (
    <div className='bg-white mb-4 p-5 rounded-lg'>
      <h1 className='text-xl font-semibold leading-[28px]'>{title}</h1>
    </div>
  );
};
Bookmark.propTypes = {
  title: PropTypes.string,
};
export default Bookmark;
