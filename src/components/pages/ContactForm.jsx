import React from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.7 },
  },
};

const ContactInfo = () => {
  return (
    <section id="contact" className=" py-7 md:py-14 dark:bg-gray-900 text-white">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-700">
        Contact Info
      </h2>
      {/* Colored Divider */}
      <div className="w-36 h-1.5 mx-auto mb-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-700"></div>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email Card */}
        <motion.div
          className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg hover:bg-white/20 transition"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <Mail className="w-12 h-12 text-fuchsia-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <a
            href="mailto:sanzidasayra@gmail.com"
            className="text-fuchsia-400 hover:underline text-center"
          >
            sanzidasayra@gmail.com
          </a>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg hover:bg-white/20 transition"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          transition={{ delay: 0.2 }}
        >
          <Phone className="w-12 h-12 text-fuchsia-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <a
            href="tel:+8801234567890"
            className="text-fuchsia-400 hover:underline text-center"
          >
            +880 1400005606
          </a>
        </motion.div>

        {/* WhatsApp Card */}
        <motion.div
          className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg hover:bg-white/20 transition"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          transition={{ delay: 0.4 }}
        >
          <MessageSquare className="w-12 h-12 text-fuchsia-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <a
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:underline text-center"
          >
            +880 1400005606
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
