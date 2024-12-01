
const VideoTitle = ({title, overview}) => {
  //console.log(title, overview);

  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-3/4">{overview}</p>
      <div className="flex gap-2">
        <button className="text-xl bg-opacity-50 rounded-lg px-16 p-4 bg-gray-500 text-white font-semibold ">▷ Play</button>
        <button className="text-xl bg-opacity-50 rounded-lg px-16 p-4 bg-gray-500 text-white font-semibold">ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle




