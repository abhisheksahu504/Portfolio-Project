import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className=" bg-black mx-2 w-10" src={logo} alt="logo" /> */}
        <FaLaptopCode className="text-4xl" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/iamabhisheksahu/">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/abhisheksahu504/">
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/abhishek.is.the.name/"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
