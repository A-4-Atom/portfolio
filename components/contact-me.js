import { motion } from "framer-motion";
import { Kanit } from "next/font/google";
import localFont from "next/font/local";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
const newYork = localFont({ src: "../public/newYork.otf" });
const kanit = Kanit({ weight: ["500", "200"], subsets: ["latin"] });

const ContactMe = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function isEmpty(name, email, message) {
    name = name.trim();
    email = email.trim();
    message = message.trim();
    if (name == "" || email == "" || message == "") {
      return true;
    }
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isEmpty) {
      return;
    }

    emailjs
      .sendForm(
        "service_hsy3aw3",
        "template_jgxza5s",
        form.current,
        "Re0W3hXb6jKgcQloI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <footer
      id="contact"
      className="w-full flex justify-center items-center flex-col bg-[#0955A3] mt-7"
    >
      <h3
        className={`${kanit.className} text-[130px] text-white mt-0 md:text-[45px] md:mb-0 font-bold mb-7`}
      >
        LET'S&nbsp;
        <span className={`${newYork.className} font-light`}>CONNECT</span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-[2px] bg-white"
        ></motion.div>
      </h3>

        <h2 className="font-poppins text-white text-lg ml-8 md:ml-3 mr-auto">
          I would love to hear from you and discuss any potential opportunities
          or collaborations.
        </h2>

        <form
          ref={form}
          className="w-1/2 ml-8 md:ml-3 flex flex-row flex-wrap gap-6 md:w-4/5 mr-auto"
          id="contact-form"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Name"
            className="border-2 border-solid border-[rgb(161, 175, 194/1)] focus:border-darkslateblue rounded-2xl px-5 py-4 font-poppins text-lg outline-none transition-all md:w-64"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            className="border-2 border-solid border-[rgb(161, 175, 194/1)] focus:border-darkslateblue rounded-2xl px-5 py-4 font-poppins text-lg outline-none transition-all md:w-64"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className="w-full border-2 border-solid border-[rgb(161, 175, 194/1)] focus:border-darkslateblue rounded-2xl font-poppins pt-3 pl-3 text-lg outline-none transition-all"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="text-lg font-poppins rounded-3xl px-5 py-2 text-darkslateblue bg-white border-2 border-solid border-darkslateblue flex flex-row items-center"
            onClick={handleSubmit}
          >
            Send
            {loading && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mx-2"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 14,
                  delay: 0.5,
                }}
              >
                <path
                  transition={{ duration: 2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </motion.svg>
            )}
          </motion.button>
        </form>
    </footer>
  );
};

export default ContactMe;
