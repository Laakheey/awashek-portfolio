import "./App.css";
import { About, ContactMe, Home, Navbar, Project, Services } from "./components";
import Footer from "./components/Footer";


function App() {

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
      <Navbar scrollToSection={scrollToSection}/>
      <div className="lg:mx-5 mt-12 px-16 mx-1">
        <Home id={'home'}/>
        <About id={'about'}/>
        <Services id={'services'}/>
        <Project id={'project'}/>
        <ContactMe id={'contactMe'}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
