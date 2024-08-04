import { FaBell, FaMicrophone } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleBar } from "./utils/BarSlice";
import { CiSearch } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const disptch = useDispatch();
  const barOpen = useSelector((store) => store.bar.isOpen);
  const HandleBar = () => {
    disptch(toggleBar(!barOpen));
  };
  return (
    <div className="w-full p-4 pl-10  justify-between flex items-center  fixed z-0 ">
      <div className="flex gap-16 items-center">
        <button onClick={HandleBar}>
          <HiBars3 className="text-2xl" />
        </button>

        <img
          className="w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUipe0FTyWdINiTKprtW8_namo12bC32Hl3A&s"
          alt="YouTubeLogo"
        />
      </div>
      <div className="flex w-3/5 items-center gap-4 relative left-10">
        <div className="w-4/5  h-10 flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none px-10 rounded-2xl rounded-tr-none rounded-br-none border-solid border-gray-500 border-[1px] border-r-0"
          />
          <button className="h-full">
            <CiSearch className="bg-red-50 w-16 text-xl h-full px-5  rounded-br-2xl rounded-tr-2xl border-solid border-gray-500 border-[1px] border-l-1 font" />
          </button>
        </div>
        <span className="h-10 hover:bg-gray-200 flex items-center w-11 bg-red-50 justify-center rounded-full">
          <FaMicrophone className="text-xl" />
        </span>
      </div>
      <div className="flex justify-between gap-3">
        <span className="bg-slate-50 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50">
          <MdOutlineVideoCall className="text-2xl" />
        </span>
        <span className="bg-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-red-50">
          <FaBell />
        </span>
        <span className="bg-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-red-50">
          <IoPersonCircleSharp className="text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default Header;
