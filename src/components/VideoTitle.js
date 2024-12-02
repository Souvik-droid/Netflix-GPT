
const VideoTitle = ({title, overview}) => {
  //console.log(title, overview);

  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black text-stone-200">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-[30%]">{overview}</p>
      <div className="flex gap-2">
        <button className="text-xl hover:bg-opacity-70 rounded-lg px-16 p-4 bg-white text-black font-semibold ">▷ Play</button>
        <button className="text-xl bg-opacity-50 hover:bg-opacity-50 hover:bg-gray-300 hover:text-black rounded-lg px-16 p-4 bg-gray-500 text-white font-semibold">ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle




