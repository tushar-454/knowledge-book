import PropTypes from 'prop-types';
import crossIcon from '../../assets/cross.svg';
const Bookmark = ({ title, handleDelete, index }) => {
  return (
    <div className='bg-white mb-4 p-5 rounded-lg relative'>
      <img
        src={crossIcon}
        className='w-10 cursor-pointer absolute -right-2 -top-2 active:scale-90 transition'
        onClick={() => handleDelete(index)}
      />
      <h1 className='text-xl font-semibold leading-[28px]'>{title}</h1>
    </div>
  );
};
Bookmark.propTypes = {
  title: PropTypes.string,
  handleDelete: PropTypes.func,
  index: PropTypes.number,
};
export default Bookmark;
