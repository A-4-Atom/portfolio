import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";
import Skills from "./skills";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["500", "600"] });
const PersonalDetails = () => {
  return (
    <div className="font-poppins grid grid-cols-3 gap-1 w-full md:grid-cols-1 text-l">
      <RoughNotationGroup show={true}>
        <div className="ml-40 col-span-2 md:mx-8">
          <h1 className="text-2xl leading-8 md:leading-10">
            Hi! I’m Vikas, a{" "}
            <RoughNotation
              type="highlight"
              color="#E7CEFF"
              animationDuration={900}
              animationDelay={400}
            >
              developer
            </RoughNotation>{" "}
            based in <br className="md:hidden" /> New Delhi.
          </h1>
          <h3 className="text-dimgray font-normal text-lg leading-9">
            I enjoy creating{" "}
            <RoughNotation
              type="highlight"
              color="#FDC8E9"
              animationDuration={700}
            >
              user-friendly,
            </RoughNotation>{" "}
            simple, and{" "}
            <RoughNotation
              type="highlight"
              color="#F9E58B"
              animationDuration={700}
              multiline
            >
              pleasant websites.
            </RoughNotation>
          </h3>
          <h3 className="text-dimgray font-normal text-lg leading-7">
            {" "}
            I'm a recent graduate specializing in{" "}
            <RoughNotation
              type="highlight"
              color="#FEC6D0"
              animationDuration={700}
              multiline
            >
              front-end development
            </RoughNotation>
            . I've learned current web technology <br /> and{" "}
            <RoughNotation
              type="highlight"
              color="#F9E58B"
              animationDuration={700}
              multiline
            >
              design principles
            </RoughNotation>{" "}
            through my college years. My portfolio demonstrates my dedication to
            user-centric <br />
            design as well as my technical expertise in developing{" "}
            <RoughNotation
              type="highlight"
              color="#E7CEFF"
              animationDuration={700}
              multiline
            >
              visually appealing
            </RoughNotation>{" "}
            user interfaces.
          </h3>
          <h3 className="text-dimgray font-normal text-lg">
            I am currently looking for a new role as a developer,&nbsp;&nbsp;
            <strong>
              <RoughNotation
                type="circle"
                color="#FEC6D0"
                strokeWidth={2}
                animationDuration={1200}
                padding={[10, 10]}
                multiline
                animationDelay={500}
                iterations={3}
              >
                Hire me?
              </RoughNotation>
            </strong>
          </h3>

          <div className="flex items-center gap-2 max-w-max flex-wrap">
            <h3 className="text-dimgray font-normal text-lg">Tech I </h3>
            <svg
              viewBox="0 0 20 20"
              height="24"
              width="24"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500"
            >
              <path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0L10 5.197 8.864 4.155c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"></path>
            </svg>
            <h3 className="text-dimgray font-normal text-lg">:</h3>
            <Skills />
          </div>

          <div className="my-5 flex gap-6 flex-wrap md:gap-5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="py-[11px] px-[37px] font-poppins text-lg bg-darkslateblue text-white rounded-md cursor-pointer md:px-[10px]"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vikas-chauhan-232182136/",
                  "_blank"
                )
              }
            >
              View Linkedin
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className=" bg-white py-[9px] px-[40px] font-poppins text-lg border-darkslateblue border-2 rounded-md cursor-pointer md:px-[10px]"
              onClick={() =>
                window.open("https://github.com/A-4-Atom", "_blank")
              }
            >
              View Github
            </motion.button>
          </div>
        </div>
      </RoughNotationGroup>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 121,
          damping: 17,
        }}
      >
        {/* <Image
          width={476}
          height={512}
          src="/myphoto.png"
          alt="My photo"
          className="w-3/4 md:hidden my-5 shadow-2xl rounded-md"
        /> */}
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="md:hidden"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(254, 198, 208, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(231, 206, 255, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <mask id="mask1" mask-type="alpha">
            <path
              fill="url(#sw-gradient)"
              d="M30.3,-31C37.1,-23.6,38.8,-11.8,38.1,-0.7C37.5,10.4,34.4,20.9,27.6,26.4C20.9,31.9,10.4,32.5,0.8,31.7C-8.8,30.8,-17.5,28.6,-24.7,23C-31.9,17.5,-37.6,8.8,-37.3,0.3C-37.1,-8.2,-30.9,-16.5,-23.7,-23.9C-16.5,-31.4,-8.2,-38,1.8,-39.8C11.8,-41.5,23.6,-38.4,30.3,-31Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
            ></path>
          </mask>
          <g mask="url(#mask1)">
            <path
              fill="url(#sw-gradient)"
              d="M30.3,-31C37.1,-23.6,38.8,-11.8,38.1,-0.7C37.5,10.4,34.4,20.9,27.6,26.4C20.9,31.9,10.4,32.5,0.8,31.7C-8.8,30.8,-17.5,28.6,-24.7,23C-31.9,17.5,-37.6,8.8,-37.3,0.3C-37.1,-8.2,-30.9,-16.5,-23.7,-23.9C-16.5,-31.4,-8.2,-38,1.8,-39.8C11.8,-41.5,23.6,-38.4,30.3,-31Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
            ></path>
            <image
              href="https://i.imgur.com/yf49t9y_d.webp?maxwidth=760&fidelity=grand"
              x="3"
              y="-30"
              className="w-full"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default PersonalDetails;
