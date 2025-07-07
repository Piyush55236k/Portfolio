import heroImage from "../assets/Profile.jpg";
import FlipAvatar from './FlipAvatar';
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative min-w-[40dvh] bg-black text-white  rounded-lg px-3 py-3 overflow-hidden justify-center items-center">
      {/* Navbar */}
      <div className="absolute top-0 w-full z-50 mx-auto flex justify-between px-10 py-5">

        <Link to="/" className="font-bold tracking-wider">PIYUSH</Link>
        <a
          href="/Piyush_Pandey_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Resume
        </a>
      </div>


      {/* Main Content */}
      <div className="relative z-10 flex md:flex-row flex-col items-center justify-center  w-full bg-[#262626] rounded-lg min-h-[98dvh]">
        {/* Profile Image */}
        <FlipAvatar />

        {/* Text Content */}
        <div className="md:w-[70%] font-display pr-9">
          <h1 className="md:text-[6.0rem]  md:text-end text-[3rem] items-center justify-center text-center mb-5">
            Piyush Pandey
          </h1>

          <p className="mb-5 items-center justify-center text-center md:w-[70%]  pl-5 md:text-end">
            Pursuing BCA and actively building real-world projects using the MERN stack. I’ve developed apps like Taskizo, a Spotify clone, and GSAP-powered landing pages—constantly pushing my skills through hands-on learning.
          </p>

          <Link to="/contact" className="text-white text-center md:text-start justify-center items-center pl-5">
            GET IN TOUCH <span className="text-red-600 text-[20px]  item-center justify-center ms:flex-end">↗</span>

          </Link>

        </div>
        <div className="absolute bottom-6 right-6 text-xs text-gray-400 tracking-wide uppercase animate-bounce">
  Scroll for more ↓
</div>


      </div>
    </section>
  );
};

export default Hero;