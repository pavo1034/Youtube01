import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import {
  MdHistory,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { toggleBar } from "./utils/BarSlice";
import { HiBars3 } from "react-icons/hi2";

const SiderBar = () => {
  const disptch = useDispatch();
  const barOpen = useSelector((store) => store.bar.isOpen);
  const HandleBar = () => {
    disptch(toggleBar(!barOpen));
  };
  return (
    <motion.div
      animate={{
        x: barOpen ? 0 : -100,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.1,
      }}
      className={`w-56 bg-white fixed z-10 ${barOpen?"pt-[12px] shadow-lg":"pt-[24px]"}  h-[80vh]`}
    >
      <div
          className={`flex   ${
            !barOpen
              ? "flex-col pl-[105px] gap-2  items-center"
              : "flex-row gap-16 justify-start pl-10 py-3  items-center"
          } `}
        >
          <button onClick={HandleBar}>
          <HiBars3 className="text-2xl" />
        </button>
       {barOpen && <img
          className="w-20 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUipe0FTyWdINiTKprtW8_namo12bC32Hl3A&s"
          alt="YouTubeLogo"
        />}
        </div>
      <div
        className={`w-full  pl-2 sidebar pt-4 ${
          !barOpen ? "space-y-5" : "space-y-1"
        }`}
      >
        <div
          className={`flex   ${
            !barOpen
              ? "flex-col pl-24 gap-1  items-center"
              : "flex-row gap-16 justify-start pl-8 py-3 items-center"
          } hover:bg-gray-300/50`}
        >
          <FaHome className="text-2xl" />
          <p className={`${!barOpen ? "text-black text-sm" : "font-semibold"}`}>
            Home
          </p>
        </div>
        <div
          className={`flex    ${
            !barOpen
              ? "flex-col pl-24 gap-1 items-center"
              : "flex-row gap-16 justify-start pl-8 py-3 items-center"
          } hover:bg-gray-300/50`}
        >
          <SiYoutubeshorts className="text-2xl" />
          <p className={`${!barOpen ? "text-black text-sm" : "font-semibold"}`}>
            Shorts
          </p>
        </div>
        <div
          className={`flex   ${
            !barOpen
              ? "flex-col pl-24 gap-1 items-center"
              : "flex-row gap-10 justify-start pl-8 py-3 items-center"
          } hover:bg-gray-300/50`}
        >
          <MdOutlineSubscriptions className="text-2xl" />
          <p className={`${!barOpen ? "text-black text-sm" : "font-semibold"}`}>
            Subscriptions
          </p>
        </div>
        <div
          className={`flex   ${
            !barOpen
              ? "flex-col pl-24 gap-1 items-center"
              : "flex-row gap-16 justify-start pl-8 py-3 items-center"
          } hover:bg-gray-300/50`}
        >
          <MdOutlineVideoLibrary className="text-2xl" />
          <p className={`${!barOpen ? "text-black text-sm" : "font-semibold"}`}>
            You
          </p>
        </div>
        <div
          className={`flex pb-4 ${
            !barOpen
              ? "flex-col pl-24 gap-1 items-center"
              : "flex-row gap-16 justify-start pl-8 py-3 items-center"
          } hover:bg-gray-300/50`}
        >
          <MdHistory className="text-2xl" />
          <p className={`${!barOpen ? "text-black text-sm" : "font-semibold"}`}>
            History
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SiderBar;
