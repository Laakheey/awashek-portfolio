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
        <Button url="#project" buttonValue="See My PROJECT"/>
      </div>

      <img src="./vite.svg" className="bg-red w-[100px] h-[100px] my-5" />
    </div>
  );
};

export default Home;
