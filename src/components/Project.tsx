import { NavIdProps } from "./Home";
import ServiceProjectImage from "../utils/ServiceProjectImage";
import { myProject } from "../utils/myProjects";

const Project = ({ id }: NavIdProps) => {
  return (
    <>
      <div
        id={id}
        className="flex-col flex justify-center items-center my-10 gap-3 "
      >
        <p className="border-t-4 border-[#ef6d58] w-20"></p>
        <p className="font-medium text-2xl uppercase text-[#EF6D58]">
          checkout my projects
        </p>
      </div>

      <div className="border border-[#EF6D58] text-[#EF6D58] rounded-[50%] w-[5rem] text-xs px-2 py-0.5 my-2">
        My works
      </div>

      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ServiceProjectImage
          image={myProject.project1.image}
          heading={myProject.project1.heading}
          description={myProject.project1.description}
          button={myProject.project1.button}
        />

        <ServiceProjectImage
          image={myProject.project2.image}
          heading={myProject.project2.heading}
          description={myProject.project2.description}
          button={myProject.project2.button}
        />

        <ServiceProjectImage
          image={myProject.project3.image}
          heading={myProject.project3.heading}
          description={myProject.project3.description}
          button={myProject.project3.button}
        />
      </div>
    </>
  );
};

export default Project;
