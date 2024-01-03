import Image from '../assets/wave-pulse.svg';
import { NavIdProps } from './Home';

const Services = ({id}:NavIdProps) => {
  return (
    <>
      <div  id={id} className="flex-col flex justify-center items-center my-10 gap-3 ">
        <p className="border-t-4 border-[#ef6d58] w-20"></p>
        <p className="font-medium text-2xl uppercase text-[#EF6D58]">
          interventions
        </p>
      </div>

      <div className="border border-[#EF6D58] text-[#EF6D58] rounded-[50%] w-[5rem] text-xs px-2 py-0.5">
        My Services
      </div>

      <div className="flex lg:flex-row md:flex-col sm:flex-col sm:gap-3 ">
        <div className="flex flex-col md:mr-64 lg:mr-0 md:w-full">
          <p className="text-2xl">
            Why Hire Me For Your Next{" "}
            <span className="text-[#EF6D58]">Project?</span>
          </p>
          <p>
            I'm UI/UX Designer and create simple, clean, user friendly and easy
            to navigate design for user. My passion is designing & solving
            problems through user experience and research.
          </p>
          <button className="text-[#fff] px-2 py-1 rounded bg-[#EF6D58] font-small w-32 mt-1">
            Contact me &nbsp;
            <i
              className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
              style={{ color: "#fff" }}
            ></i>
          </button>
        </div>
        <div className="flex flex-row gap-5 lg:gap-10">
          <div className="bg-[#E1E1E2] lg:w-64 md:w-32 h-44 border rounded flex-1 px-2 ">
            <i
              className="fa-regular fa-gem text-[2rem] py-2 pt-5"
              style={{ color: "#EF6D58" }}
            ></i>{" "}
            <br />
            <p className="font-medium">Visual Design</p>
            <p>Create user interface design with unique & modern ideas</p>
          </div>
          <div className="bg-[#E1E1E2] w-32 h-44 border rounded flex-1 px-2">
            <img src={Image} alt="" className='h-12 pt-5 mb-3'/>
            <p className="font-medium">Design Prototype</p>{" "}
            <p>Create design prototype with Figma apps</p>
          </div>
          <div className="bg-[#E1E1E2] w-32 h-44 border rounded flex-1 px-2">
          <i className="fa-solid fa-graduation-cap py-2 pt-5 text-[2rem] text-[#ef6d58]"></i>
            <p className="font-medium text-md">UX Research</p>
            <p>Create digital user products with updated ideas</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;