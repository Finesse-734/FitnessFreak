import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourclasses";
import ContactUs from "@/scenes/contactus";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY == 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      else{
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <div className='app bg-gray-20'>
      <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={selectedPage}/>
      <Benefits setSelectedPage = {selectedPage}/>
      <OurClasses setSelectedPage={selectedPage}/>
      <ContactUs setSelectedPage={selectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
