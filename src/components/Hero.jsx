import { Link } from "react-router-dom";
import FlipAvatar from "./FlipAvatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#262626] text-foreground overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-5 bg-[#262626]/80 backdrop-blur-md">
        <Link to="/" className="text-xl font-bold tracking-wider text-foreground hover:text-primary transition-colors">
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
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-6 md:px-24 pt-28 md:pt-36 pb-16 gap-12 md:gap-24">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-border shadow-lg bg-muted flex items-center justify-center">
          <FlipAvatar />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full space-y-7 text-center md:text-left flex flex-col items-center md:items-start md:justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight">
            Piyush
            <br className="hidden md:block" />
            <span className="text-primary font-semibold">Pandey</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Pursuing BCA and actively building real-world projects using the MERN stack. I've developed apps like Taskizo, a Spotify clone, and GSAP-powered landing pages—constantly pushing my skills through hands-on learning.
          </p>

          {/* GET IN TOUCH button */}
          <div className="mt-8 flex justify-center md:justify-start w-full">
            <Link
              to="/contact"
              className="
                group
                inline-flex items-center gap-2
                bg-primary text-primary-foreground
                px-7 py-4
                rounded-lg
                font-semibold
                text-base
                shadow-md
                transition
                hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              "
            >
              GET IN TOUCH
              <span className="ml-1 text-xl text-red-600 transition-transform duration-200 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Scroll Prompt: centered on mobile, right on desktop */}
      <div
        className="
          absolute bottom-6 left-1/2 transform -translate-x-1/2
          md:left-auto md:right-12 md:translate-x-0
          flex items-center gap-2
          text-sm text-muted-foreground tracking-wider uppercase
          select-none pointer-events-none
        "
      >
        <span className="animate-fade-in-down">SCROLL FOR MORE</span>
        <span className="inline-block animate-bounce-smooth">↓</span>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-12px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-down {
            animation: fade-in-down 1.2s 0.7s both;
          }
          @keyframes bounce-smooth {
            0%, 100% { transform: translateY(0);}
            30% { transform: translateY(-8px);}
            50% { transform: translateY(2px);}
            80% { transform: translateY(-2px);}
          }
          .animate-bounce-smooth {
            animation: bounce-smooth 1.4s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;