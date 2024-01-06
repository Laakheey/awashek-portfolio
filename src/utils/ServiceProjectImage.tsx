import React from "react";

type serviceImage = {
  image: string;
  heading: string;
  description: string;
  button: string;
};

const ServiceProjectImage = ({
  image,
  heading,
  description,
  button,
}: serviceImage): React.JSX.Element => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" className="flex justify-center items-center pt-2 ">
        <img className="rounded-t-lg h-40" src={image} alt="Project Image" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ef6d58]">
            {heading}
          </h5>
        </a>
        <p className="mb-3 font-normal text-[#ef6c588c]">{description}</p>
        <button className="text-[#fff] px-2 py-1 rounded bg-[#000] font-small ">
          {button} &nbsp;
          <i
            className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
            style={{ color: "#fff" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default ServiceProjectImage;
