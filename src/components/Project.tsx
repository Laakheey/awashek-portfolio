import image from "../assets/react.svg";
import { NavIdProps } from "./Home";

const Project = ({id}:NavIdProps) => {
  return (
    <>
      <div  id={id} className="flex-col flex justify-center items-center my-10 gap-3 ">
        <p className="border-t-4 border-[#ef6d58] w-20"></p>
        <p className="font-medium text-2xl uppercase text-[#EF6D58]">
          checkout my projects
        </p>
      </div>

      <div className="border border-[#EF6D58] text-[#EF6D58] rounded-[50%] w-[5rem] text-xs px-2 py-0.5 my-2">
        My works
      </div>

      {/* <div className="flex gap-3 flex-wrap">
        <div className="bg-white border border-gray-200 rounded-lg shadow lg:w-1/3 md:w-1/2 sm:w-full lg:max-w-sm">
          <a href="#" className="flex justify-center items-center pt-2">
            <img
              className="rounded-t-lg h-40"
              src={image}
              alt="Project Image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ef6d58]">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-[#ef6c588c]">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="text-[#fff] px-2 py-1 rounded bg-[#000] font-small ">
              See My PROJECT &nbsp;
              <i
                className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
                style={{ color: "#fff" }}
              ></i>
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow lg:w-1/3 md:w-1/2 sm:w-full lg:max-w-sm">
          <a href="#" className="flex justify-center items-center pt-2 ">
            <img
              className="rounded-t-lg h-40"
              src={image}
              alt="Project Image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ef6d58]">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-[#ef6c588c]">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="text-[#fff] px-2 py-1 rounded bg-[#000] font-small ">
              See My PROJECT &nbsp;
              <i
                className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
                style={{ color: "#fff" }}
              ></i>
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow lg:w-1/3 md:w-1/2 sm:w-full lg:max-w-sm">
          <a href="#" className="flex justify-center items-center pt-2">
            <img
              className="rounded-t-lg h-40"
              src={image}
              alt="Project Image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ef6d58]">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-[#ef6c588c]">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="text-[#fff] px-2 py-1 rounded bg-[#000] font-small ">
              See My PROJECT &nbsp;
              <i
                className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
                style={{ color: "#fff" }}
              ></i>
            </button>
          </div>
        </div>
      </div> */}

      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <a href="#" className="flex justify-center items-center pt-2">
            <img
              className="rounded-t-lg h-40"
              src={image}
              alt="Project Image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ef6d58]">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-[#ef6c588c]">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="text-[#fff] px-2 py-1 rounded bg-[#000] font-small ">
              See My PROJECT &nbsp;
              <i
                className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
                style={{ color: "#fff" }}
              ></i>
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <a href="#" className="flex justify-center items-center pt-2 ">
            <img
              className="rounded-t-lg h-40"
              src={image}
              alt="Project Image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ef6d58]">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-[#ef6c588c]">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="text-[#fff] px-2 py-1 rounded bg-[#000] font-small ">
              See My PROJECT &nbsp;
              <i
                className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
                style={{ color: "#fff" }}
              ></i>
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <a href="#" className="flex justify-center items-center pt-2">
            <img
              className="rounded-t-lg h-40"
              src={image}
              alt="Project Image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ef6d58]">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-[#ef6c588c]">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="text-[#fff] px-2 py-1 rounded bg-[#000] font-small ">
              See My PROJECT &nbsp;
              <i
                className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
                style={{ color: "#fff" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
