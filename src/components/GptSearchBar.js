import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 grid grid-cols-12 bg-black '>
            <input
                type='text'
                placeholder="what's on your mind?"
                className='border p-4 m-4 bg-black rounded-2xl col-span-9 border-red-500'
            />
            <button className='rounded col-span-3 bg-red-700 m-4 py-2 px-4 text-white'>Search</button>

        </form>
      
    </div>
  )
}

export default GptSearchBar
