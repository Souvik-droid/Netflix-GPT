import { LOGO, SUPPORTED_LANG } from '../utils/constant'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice';
import { gptToggle } from '../utils/gptSlice'
import { languageChange } from '../utils/configSlice'


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    // Sign-out successful
  }).catch((error) => {
    // An error happened.
    navigate('/error')
  });
  }

  //language handle click
  const handleLanguageClick = (e) => {
    dispatch(languageChange(e.target.value))
    //console.log(e.target.value);
  }

  //Toggle
  const onSearchToggle = () => {
    dispatch(gptToggle());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //Useer is Signed In
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid, email, displayName, photoURL} = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email, 
            displayName: displayName, 
            photoURL: photoURL
        }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  },[]);

  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img 
        className='w-44'
        src={LOGO} alt="Logo"
      />

      { user && (<div className='flex items-center'>
          <button
            className='text-4xl text-white mr-3'
            onClick={onSearchToggle}>⌕</button>

          <img src={user?.photoURL} alt='User Logo' 
            className='w-12 h-12 rounded-sm object-cover mx-2' />

          <button className='text-white' onClick={handleSignOut}>(Sign Out)</button>

          {showGptSearch &&
            <select 
            className='p-2 bg-gray-900 text-white bg-opacity-80 m-2 ml-2' 
            onChange={handleLanguageClick}>
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
          </select>}
        </div>
      )}
    </div>
  )
}

export default Header
