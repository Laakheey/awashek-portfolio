import { useState } from "react";

const Navbar = ({ scrollToSection }: any) => {
  console.log("🚀 ~ file: Navbar.tsx:4 ~ Navbar ~ scrollToSection:", scrollToSection)
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // <div className="flex flex-row px-3 bg-slate-600 justify-between text-white items-center">
    //   <p className="flex items-center lg:text-3xl md:text-2xl sm:text-xl h-20">
    //     Awashek Poudel
    //   </p>
    //   <ul className="flex flex-column justify-between lg:gap-[5rem] cursor-pointer gap-[1rem] sm:gap-[1rem] md:gap-[3rem]">
    //     <li>
    //       <a href="#home">Home</a>
    //     </li>
    //     <li>
    //       <a href="#about">About</a>
    //     </li>
    //     <li>
    //       <a href="#services">Services</a>
    //     </li>
    //     <li>
    //       <a href="#project">Project</a>
    //     </li>
    //   </ul>
    //   <button className="bg-[#F3D1BF] px-3 mx-3 py-2 rounded-md text-[#EF6D58] font-medium ">
    //     <a href="#contactMe">
    //     Let's Talks &nbsp;
    //     <i
    //       className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
    //       style={{ color: "#EF6D58" }}
    //     ></i>
    //     </a>
    //   </button>
    // </div>

    <nav className="bg-slate-600 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Awashek Poudel
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="bg-[#F3D1BF] px-3 mx-3 py-2 rounded-md text-[#EF6D58] font-medium">
            <a href="#contactMe">
              Let's Talks &nbsp;
              <i
                className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
                style={{ color: "#EF6D58" }}
              ></i>
            </a>
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isSidebarOpen}
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${isSidebarOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-slate-600 dark:border-gray-700">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
