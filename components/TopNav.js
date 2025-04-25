import { FaBars, FaMapMarkerAlt, FaFilter } from "react-icons/fa";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between rounded-2xl px-4 py-2 w-full max-w-5xl mx-auto mt-6">
      {/* Left icons */}
      <div className="flex items-center border border-[#FFEC5D75]/46 rounded-full h-[50px] w-[140px]">
        <button className="group p-2 bg-[#FFEC5D75]/56 text-[#ffffff] transition-colors duration-200 w-1/2 rounded-l-3xl h-full flex items-center justify-center " >
          <FaBars size={18} className="text-[#ffffff] transition-colors duration-200" />
        </button>
        <button className="group p-2 bg-transparent text-[#bdb16a] transition-colors duration-200 w-1/2 rounded-r-3xl h-full flex items-center justify-center">
          <FaMapMarkerAlt size={18} className="text-[#808587] transition-colors duration-200" />
        </button>
      </div>
      {/* Center nav */}
      <div className="flex items-center bg-transparent border border-[#FFEC5D75] rounded-full px-10 py-2.5 gap-2  mx-4">
        <button className="px-4 py-1 rounded-full text-sm text-[#808587] hover:bg-[#FFEC5D75] transition-colors duration-200">Trending Now</button>
        <button className="px-4 py-1 rounded-full text-sm text-[#808587] hover:bg-[#FFEC5D75] transition-colors duration-200">Near You</button>
        <button className="px-4 py-1 rounded-full text-sm text-[#808587] hover:bg-[#FFEC5D75] transition-colors duration-200">Buy now Pay later</button>
        <button className="px-4 py-1 rounded-full text-sm text-[#808587] hover:bg-[#FFEC5D75] transition-colors duration-200">Music and concerts</button>
      </div>
      {/* Right icon */}
      <div className="flex items-center gap-2 text-[#232323] font-semibold transition-colors duration-200 rounded-full h-[50px] w-[140px] border border-[#FFEC5D75] ">
        <p className=" transition-colors duration-200 w-1/2 rounded-l-3xl h-full flex items-center justify-center bg-[#FFEC5D75] text-white"><FaFilter/></p>
        <p className=" bg-transparent w-[53.3%] h-full rounded-r-3xl flex items-center justify-center text-[#808587]">Filters</p>
      </div>
    </nav>
  );
}