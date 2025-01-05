import React from "react";
//import Image from "next/image";
import SearchBar from '@/app/components/Search';

const Header: React.FC = () => {
  return (
    <div className=" md:flex items-center hidden">
      <SearchBar/>
    <div className="inline-flex items-center px-3">
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>
    </div>
  );
};

export default Header;
