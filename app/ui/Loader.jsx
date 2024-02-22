const Loader = ({loading}) => {
  return <div>
    {loading && <div className="bg-black z-1000 bg-opacity-75 text-white w-screen h-screen top-0 absolute justify-center flex items-center">Loading...</div> }
  </div>
};
export default Loader;