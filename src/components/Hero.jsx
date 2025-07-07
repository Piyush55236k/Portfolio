import { Link } from "react-router-dom";
import FlipAvatar from "./FlipAvatar";
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#262626] text-foreground overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 w-full z-50 flex justify-between px-6 md:px-10 py-6">
        <Link to="/" className="text-xl font-bold tracking-wider text-foreground">
          PIYUSH
        </Link>
        <a
          href="/Piyush_Pandey_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-6 py-2 border border-border rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
        >
          Resume
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-6 md:px-16 py-20 gap-16">
        {/* Profile Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start items-center">
          <div className="w-65 h-65 relative">
            <div className="w-full h-full rounded-full overflow-hidden bg-muted border border-border/20">
             <FlipAvatar />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full space-y-8 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight">
            Piyush
            <br />
            Pandey
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Pursuing BCA and actively building real-world projects using the MERN stack. I've developed apps like Taskizo, a Spotify clone, and GSAP-powered landing pages—constantly pushing my skills through hands-on learning.
          </p>

          
            
            
          
            <Link to="/contact" className="
            bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm font-medium tracking-wider rounded-lg">GET IN TOUCH →</Link>
          
        </div>

        {/* Scroll Prompt */}
        <div className="absolute bottom-8 right-8 text-sm text-muted-foreground tracking-wider uppercase">
          SCROLL FOR MORE ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;
