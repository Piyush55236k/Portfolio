import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6 border-t border-white/10 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight font-display">
          Let’s Build Something Together
        </h2>
        <p className="mt-4 text-gray-400 text-sm md:text-base font-body">
          Have an idea, project, or opportunity? I’m always open to building cool things, collaborating, or taking on new challenges.
        </p>

        <Link to="/contact">
          <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all font-body">
            Get in Touch
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
