import Image from "../assets/wave-pulse.svg";
import Button from "../utils/Button";
import Heading from "../utils/Heading";
import { NavIdProps } from "./Home";

const Services = ({ id }: NavIdProps) => {
  return (
    <>
      <div
        id={id}
        className="flex-col flex justify-center items-center my-10 gap-3"
      >
        <Heading heading="interventions"/>
      </div>

      <div className="border border-[#EF6D58] text-[#EF6D58] rounded-[50%] w-[5rem] text-xs px-2 py-0.5">
        My Services
      </div>

      <div className="flex lg:flex-row sm:gap-3 flex-col">
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
          <Button url="#contactMe" buttonValue="Contact me"/>
        </div>
        <div className="flex lg:flex-row sm:flex-row md:flex-row flex-col gap-5 lg:gap-10">
          <div className="bg-[#E1E1E2] lg:w-54 md:w-32 h-44 border rounded flex-1 px-2 w-full">
            <i
              className="fa-regular fa-gem text-[2rem] py-2 pt-5"
              style={{ color: "#EF6D58" }}
            ></i>{" "}
            <br />
            <p className="font-medium">Visual Design</p>
            <p>Create user interface design with unique & modern ideas</p>
          </div>
          <div className="bg-[#E1E1E2] lg:w-64 md:w-32 h-44 border rounded flex-1 px-2 w-full">
            <img src={Image} alt="" className="h-12 pt-5 mb-3" />
            <p className="font-medium">Design Prototype</p>{" "}
            <p>Create design prototype with Figma apps</p>
          </div>
          <div className="bg-[#E1E1E2] lg:w-64 md:w-32 h-44 border rounded flex-1 px-2 w-full">
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
