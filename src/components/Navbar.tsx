
const Navbar = ({ scrollToSection }: any) => {
  console.log("🚀 ~ file: Navbar.tsx:3 ~ Navbar ~ scrollToSection:", scrollToSection);
  return (
    <div className="flex flex-row px-3 bg-slate-600 justify-between text-white items-center">
      <p className="flex items-center lg:text-3xl md:text-2xl sm:text-xl h-20">
        Awashek Poudel
      </p>
      <ul className="flex flex-column justify-between gap-[5rem] cursor-pointer sm:gap-[2rem] md:gap-[3rem]">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
      </ul>
      <button className="bg-[#F3D1BF] px-3 mx-3 py-2 rounded-md text-[#EF6D58] font-medium ">
        <a href="#contactMe">
        Let's Talks &nbsp;
        <i
          className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
          style={{ color: "#EF6D58" }}
        ></i>
        </a>
      </button>
    </div>
  );
};

export default Navbar;
