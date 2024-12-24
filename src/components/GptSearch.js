import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoveSuggestions from './GptMoveSuggestions'
import { Login_bg } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className=' '>
        <img 
            className="absolute -z-10 " 
            src={Login_bg} alt="login background" 
        />
        <GptSearchBar/>
        <GptMoveSuggestions/>
    </div>
  )
}

export default GptSearch
