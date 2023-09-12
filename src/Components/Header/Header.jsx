import headLogo from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div className='headerWrap flex justify-between items-center py-8 border-b border-[#11111126]'>
      <h1 className='text-5xl font-bold leading-[64px]'>Knowledge Cafe</h1>
      <img src={headLogo} alt='headLogo' className='w-14' />
    </div>
  );
};

export default Header;
