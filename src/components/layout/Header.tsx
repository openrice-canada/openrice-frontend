import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full flex justify-between px-4 h-16 bg-white z-10'>
      <Link to="/" className='flex items-center gap-1'>
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="OpenRice" className='w-8 h-8' />
        <h1 className='text-2xl font-bold'>OpenRice</h1>
      </Link>
      <div className='flex items-center gap-4'>
        <Link to="/sign-up" className='text-lg font-bold'>Sign Up</Link>
        <Link to="/login" className='text-lg font-bold'>Login</Link>
      </div>
    </div>
  )
}

export default Header