const Footer = () => {
  return (
    <>
      <div className="mt-20 mb-10">
        <ul className="flex flex-row gap-7 justify-center">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contactMe">Contact</a></li>
        </ul>
        <div className="flex justify-between border-t-2 mt-5 md:flex-col sm:flex-col sm:items-center pt-2 lg:flex-row">
          <p className="font-medium">Ⓒ 2023. All Rights Reserved</p>
          <p className="font-medium">
            Created by <span className="text-[#EF6D58]">Sunil Pandey</span>
          </p>
          <div>
            <ul className="flex gap-3 text-[1.5rem]">
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
