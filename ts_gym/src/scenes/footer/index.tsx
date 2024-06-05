import { SelectedPage } from "@/shared/types"
import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img
                    alt="logo"
                    src={Logo}
                />
                <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae.  
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Massa orci senectus</p>
                <p className="my-5">Et gravida id et etiam</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Tempus metus mattis resus voltpat egostar.</p>
                <p>(911)843-2567</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer