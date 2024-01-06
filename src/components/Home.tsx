import Button from "../utils/Button";

export type NavIdProps = {
  id: string;
};

const Home = ({ id }: NavIdProps) => {
  return (
    <div id={id} className="flex lg:flex-row md:flex-row flex-col">
      <div>
        <p className="text-[#EF6D58] text-lg">Hi there 👋</p>
        <p className="lg:text-[2rem] text-[1.5rem] font-medium">
          I'm UI/UX Designer With Passion of Designing
        </p>
        <p className="lg:text-[2rem] text-[1.5rem] text-[#EF6D58] font-medium">
          Web & Mobile Interface
        </p>
        <p>
          My passion for design and user experience drives me to create
          solutions that are visually stunning clean and easy to navigate user
          interface.
        </p>
        {/* <button className="text-[#fff] px-2 py-1 rounded bg-[#EF6D58] font-small ">
          <a href="#project">
            See My PROJECT &nbsp;
            <i
              className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
              style={{ color: "#fff" }}
            ></i>
          </a>
        </button> */}
        <Button url="#project" buttonValue="See My PROJECT"/>
      </div>

      <img src="./vite.svg" className="bg-red w-[100px] h-[100px] my-5" />
    </div>
  );
};

export default Home;
