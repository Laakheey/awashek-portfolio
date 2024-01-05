import { NavIdProps } from "./Home";

const ContactMe = ({ id }: NavIdProps) => {
  return (
    <>
      <div
        id={id}
        className="flex-col flex justify-center items-center my-10 gap-3 "
      >
        <p className="border-t-4 border-[#ef6d58] w-20"></p>
        <p className="font-medium text-2xl uppercase text-[#EF6D58]">
          contact me
        </p>
        <p className="text-gray-400">
          Any question or remarks? Just write a message!
        </p>
      </div>

      <div className="border border-[#EF6D58] text-[#EF6D58] rounded-[50%] w-[5rem] text-xs px-2 py-0.5 my-2 font-medium">
        Let's Chat.
      </div>

      <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col">
        <div className="flex-1">
          <p className="lg:text-[4rem] md:text-[3rem] sm:[3rem] font-bold">
            Tell me about your <span className="text-[#ef6d58]">project.</span>
          </p>  
          <p className="text-[#ef6c585e]">Let's create something together🤘</p>
        </div>

        <div className="mb-16 flex-1">
          <div className="flex my-3">
            <div className="w-1/2">
              <label htmlFor="firstName">First Name</label> <br />
              <input
                id="firstName"
                type="text"
                placeholder="John"
                className="h-10 lg:border-b-2 md:border-b-2 sm:border-b-2 border-black mt-3 w-[90%] focus:outline-none focus:placeholder:opacity-0"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName">Last Name</label> <br />
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                className="lg:border-b-2 md:border-b-2 sm:border-b-2 border-black mt-3 w-[90%] h-10 focus:outline-none focus:placeholder:opacity-0"
              />
            </div>
          </div>

          <div className="flex my-7">
            <div className="w-1/2">
              <label htmlFor="email">Email</label> <br />
              <input
                id="email"
                type="text"
                placeholder="example@hotmail.com"
                className="lg:border-b-2 md:border-b-2 sm:border-b-2 border-black mt-3 w-[90%] h-10 focus:outline-none focus:placeholder:opacity-0"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="phoneNumber">Phone Number</label> <br />
              <input
                id="phoneNumber"
                type="text"
                placeholder="+1 012 3456 789"
                className="lg:border-b-2 md:border-b-2 sm:border-b-2 border-black mt-3 w-[90%] h-10 focus:outline-none focus:placeholder:opacity-0"
              />
            </div>
          </div>

          <div className="flex my-7">
            <div className="w-full">
              <label htmlFor="message">Message</label> <br />
              <input
                id="message"
                type="text"
                placeholder="Write your message..."
                className="lg:border-b-2 md:border-b-2 sm:border-b-2 border-black mt-3 w-[96%] h-10 focus:outline-none focus:placeholder:opacity-0"
              />
            </div>
          </div>
        </div>
      </div>

      <button className="bg-[#EF6D58] px-3 mx-3 py-2 rounded-md text-[#fff] font-medium float-right">
        <a href="#contactMe">
          Let's Talks &nbsp;
          <i
            className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
            style={{ color: "#fff" }}
          ></i>
        </a>
      </button>
    </>
  );
};

export default ContactMe;
