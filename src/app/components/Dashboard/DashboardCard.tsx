"use client";
//import Image from 'next/image'
import { useState } from "react";
import dashboardImage from "@/app/assets/images/man.jpg";
import { LuBookmark } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa6";
import { TbMovie } from "react-icons/tb";

/**interface DashboardCardProps {
    backgroundImage: string;
    title: string;
    description: string;
}**/

const DashboardCard: React.FC = () => {
  const [isBookMarked, setIsBookmarked] = useState<boolean>(false);
  const setBookmark = () => {
    setIsBookmarked(!isBookMarked);
  };
  return (
    <div
      style={{ backgroundImage: `url(${dashboardImage.src})` }}
      className="max-w-sm h-52 relative bg-cover bg-center bg-no-repeat object-cover rounded-lg shadow "
    >
      <div className="p-5">
        <div className="flex justify-end my-2">
          {!isBookMarked && (
            <LuBookmark
              onClick={setBookmark}
              className="text-white hover:bg-gray-500/50 hover:duration-150 hover:cursor-pointer rounded-full w-10 h-10 p-2"
            />
          )}
          {isBookMarked && (
            <FaBookmark
              onClick={setBookmark}
              className="text-white bg-gray-500/50 hover:duration-150 hover:cursor-pointer rounded-full w-10 h-10 p-2"
            />
          )}
        </div>
        <div className='absolute bottom-2'>
          <div className="flex items-center gap-2 text-gray-500">
            <span>2019 .</span>
            <span className="inline-flex items-center gap-2">
              <TbMovie/>
              <p className="text-[12px]">Movie</p>
            </span>
            <span>. PG</span>
          </div>
          <p className="text-white text-[1.2rem] font bold">Am Calling</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
