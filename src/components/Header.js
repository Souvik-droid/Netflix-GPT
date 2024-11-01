import { LOGO, User_Logo } from '../utils/constant'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

const Header = () => {

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    // Sign-out successful.
      navigate('/');
  }).catch((error) => {
    // An error happened.
    navigate('/error')
  });
  }

  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img 
        className='w-44'
        src={LOGO} alt="Logo" />
      <div className='flex items-center'>
        <img src={User_Logo} alt='User Logo' 
          className='w-12 h-12 rounded-sm object-cover mr-2' />
          <button className='text-white' onClick={handleSignOut}>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Header
