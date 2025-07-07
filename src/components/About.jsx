import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6 relative font-display ">
        <h2 className="absolute top-5 left-5">ABOUT US</h2>
      <div className="max-w-5xl mx-auto md:w-full items-end justify-end">

        {/* Heading with animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold uppercase leading-tight tracking-wide text-end md:leading-loose"
        >
          LET’S WORK TOGETHER<br />
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold uppercase leading-tight tracking-wide text-start md:leading-loose"
        >
          TO BUILD SOMETHING MODERN,<br />
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold uppercase leading-tight tracking-wide text-end md:leading-loose"
        >
          RESPONSIVE AND POWERFUL
        </motion.h2>

        {/* Subtext with animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-base md:text-4xl text-gray-400 font-body"
        >
          A future-proof web experience that reflects your vision.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
