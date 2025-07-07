import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o86k006",    // <-- replace with your EmailJS service ID
        "template_vv45rxo",   // <-- replace with your EmailJS template ID
        form.current,
        "ne7dPokepsmI8Ktw5"     // <-- replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Message failed: " + error.text);
        }
      );
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6 h-full">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold uppercase"
        >
          Get in Touch
        </motion.h2>
        <p className="mt-4 text-sm md:text-base text-gray-400 font-body">
          Interested in working together? Fill out the form and let’s start a conversation.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-12 max-w-2xl mx-auto grid gap-6"
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-white/5 text-white border border-white/10 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-white/5 text-white border border-white/10 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-white/5 text-white border border-white/10 rounded-md placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300"
          >
            Send Message
          </button>
        </motion.div>
      </form>
    </section>
  );
};

export default Contact;
