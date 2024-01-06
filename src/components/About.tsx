import Button from "../utils/Button";
import Heading from "../utils/Heading";
import { NavIdProps } from "./Home";

const About = ({ id }: NavIdProps) => {
  return (
    <>
      <div
        id={id}
        className="flex-col flex justify-center items-center my-10 gap-3"
      >
        <Heading heading="about me"/>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col">
        <div>
          <div className="flex flex-col gap-5">
            <p>
              Hello, I'm <span className="text-[#EF6D58]">Awashek Poudel</span>{" "}
              from Kathmandu, Nepal. I recently graduated with a Bachelor degree
              in Information Science and Engineering. I enjoy crafting UI
              designs paired with UX research, and also create some prototypes
              for projects. As a designer, I focus on creating beautiful,
              intuitive, and design that are simple, clean and easy-to-navigate.
            </p>
            <p>I hope we can collaborate on a project together.</p>
          </div>

          <div className="flex flex-col gap-4 my-5">
            <p className="font-medium">UI</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#EF6D58] h-2.5 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>

            <p className="font-medium">Ux Research</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#EF6D58] h-2.5 rounded-full"
                style={{ width: "77%" }}
              ></div>
            </div>

            <p className="font-medium">Design Prototype</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#EF6D58] h-2.5 rounded-full"
                style={{ width: "68%" }}
              ></div>
            </div>
          </div>
          <Button url="#contactMe" buttonValue="Hire Me"/>
        </div>

        <img src="./vite.svg" className="w-[100px] h-[200px] my-5" />
      </div>
    </>
  );
};

export default About;
