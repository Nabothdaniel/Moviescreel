"use client";

import { useState,JSX } from "react";
import Link from "next/link";
import { FaSquare, FaBookmark, FaBilibili,  FaPix,  FaClapperboard  } from "react-icons/fa6";

// Define a type for the sidebar link properties
interface SidebarLink {
  href: string;
  icon: JSX.Element;
  label: string;
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const iconStyle = " w-5 h-5 md:h-7 md:w-7 text-white transition duration-75 group-hover:text-white dark:group-hover:text-white";

  // Define the sidebar links
  const links: SidebarLink[] = [
    {
      href: "/",
      icon: <FaClapperboard className={`${iconStyle} text-red-600`} />,
      label: "Dashboard",
    },
    {
      href: "/pages/about",
      icon: <FaSquare className={iconStyle}/>,
      label: "About",
    },
    {
      href: "/pages/trending",
      icon: <FaPix className={iconStyle}/>,
      label: "Trending",
    },
    {
      href: "#",
      icon: <FaBilibili className={iconStyle}/>,
      label: "Download",
    },
    {
      href: "#",
      icon: <FaBookmark className={iconStyle}/>,
      label: "BookMark",
    },
  ];

  return (
    <>
      <div className="flex md:hidden justify-between items-center px-4 text-white">
        <Link href="/">MovieScreel</Link>
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
      </div>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full w-full md:w-[30%] px-3 py-10 overflow-y-auto bg-[#3f3f3f] md:rounded-tr-xl shadow">
          <ul className="space-y-2 font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="flex items-center md:justify-center p-2 md:px-auto text-gray-900 rounded-lg dark:text-white hover:bg-gray-900 hover:text-white group my-3 md:my-5"
                >
                  {link.icon}
                  <span className="ms-3 text-white hover:text-white md:hidden">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
