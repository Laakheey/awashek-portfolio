import { NavIdProps } from "./Home";
import ServiceProjectImage from "../utils/ServiceProjectImage";
import { mProjects } from "../utils/myProjects";
import Heading from "../utils/Heading";

const Project = ({ id }: NavIdProps) => {
  return (
    <>
      <div
        id={id}
        className="flex-col flex justify-center items-center my-10 gap-3 "
      >
        <Heading heading="checkout my projects" />
      </div>

      <div className="border border-[#EF6D58] text-[#EF6D58] rounded-[50%] w-[5rem] text-xs px-2 py-0.5 my-2">
        My works
      </div>

      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {[0, 1, 2].map((i) => (
          <ServiceProjectImage
            key={i}
            image={mProjects[i].image}
            heading={mProjects[i].heading}
            description={mProjects[i].description}
            button={mProjects[i].button}
          />
        ))}
      </div>
    </>
  );
};

export default Project;
