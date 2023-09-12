import headLogo from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div className='headerWrap flex justify-between items-center py-4 sm:py-8 mb-4 border-b border-[#11111126]'>
      <h1 className='text-3xl leading-9 sm:text-4xl md:text-5xl font-bold md:leading-[64px]'>
        Knowledge Cafe
      </h1>
      <img src={headLogo} alt='headLogo' className='w-14' />
    </div>
  );
};

export default Header;
