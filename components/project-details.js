import { nanoid } from "nanoid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const childVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, type: "spring", stiffness: 121, damping: 17 },
  },
};

function ProjectDetails(props) {
  const [openCard, setOpenCard] = useState(false);

  return (
    <>
      <AnimatePresence>
        {openCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#000000e1] fixed top-0 left-0 h-[100vh] w-full z-20 flex flex-col items-center"
            onClick={() => setOpenCard(false)}
          >
            <motion.div
              className={`bg-white w-4/5 text-2xl z-30 mt-40 rounded-xl pb-5 md:w-5/6 md:mt-10`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  stiffness: 205,
                  damping: 18,
                  duration: 0.4,
                  type: "spring",
                },
              }}
            >
              <motion.h1
                variants={childVariants}
                initial="hidden"
                animate="visible"
                className="heading max-w-max ml-5 p-0 -mb-3 md:leading-8"
              >
                {props.name}
              </motion.h1>
              <motion.p
                variants={childVariants}
                initial="hidden"
                animate="visible"
                className="w-2/3 ml-5 font-poppins text-dimgray md:w-5/6 md:leading-6"
              >
                {props.description}
              </motion.p>
              <motion.div
                className="flex flex-row flex-wrap ml-5  md:ml-2"
                variants={parentVariants}
                initial="hidden"
                animate="visible"
              >
                {props.skills.map((x) => {
                  return (
                    <motion.div
                      key={x}
                      variants={childVariants}
                      className="rounded-2xl text-sm font-poppins border-2 border-solid border-darkslateblue mx-1 px-4 my-1"
                    >
                      {x}
                    </motion.div>
                  );
                })}
              </motion.div>
              <motion.div
                className="flex flex-row flex-wrap items-center"
                variants={parentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  type="button"
                  className="text-white text-lg bg-darkslateblue ml-5 rounded-md py-2 px-3 flex flex-row items-center"
                  variants={childVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open(props.liveLink, "_blank")}
                >
                  Live Demo{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  type="button"
                  className="text-white text-lg bg-darkslateblue ml-5 rounded-md py-2 px-3 flex flex-row items-center md:mt-2"
                  variants={childVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open(props.sourceCode, "_blank")}

                >
                  View Source Code{" "}
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 -mt-2"
                  >
                    <path
                      d="M16.5 2.75C8.90588 2.75 2.75 8.90588 2.75 16.5C2.75 22.6098 6.73819 27.7826 12.2512 29.5735H20.7488C26.2618 27.7826 30.25 22.6098 30.25 16.5C30.25 8.90588 24.0941 2.75 16.5 2.75Z"
                      fill="url(#paint0_linear_32_91)"
                    />
                    <path
                      opacity="0.05"
                      d="M20.6319 28.8722L20.625 24.8861C20.625 24.2406 20.4738 23.6101 20.1836 23.0388C24.0618 22.2599 25.949 19.9671 25.949 16.0421C25.949 14.4918 25.4918 13.123 24.5905 11.9721C24.6593 11.7542 24.7101 11.5287 24.7418 11.2977C24.871 10.3565 24.7259 9.74118 24.6091 9.24618L24.5905 9.16643C24.4626 8.61918 24.3093 8.22868 24.3031 8.21218L24.2268 8.0183L24.1505 7.82443L23.9429 7.80243L23.7346 7.78043C23.7346 7.78043 23.5978 7.76599 23.3901 7.76599C23.1021 7.76599 22.6751 7.79487 22.2716 7.93168L22.1368 7.97705C21.6281 8.14824 21.1475 8.31049 20.4751 8.71199C20.2785 8.82955 20.0633 8.96362 19.833 9.11349C18.7921 8.85568 17.6722 8.72437 16.5 8.72437C15.3161 8.72437 14.1866 8.85637 13.1388 9.11693C12.9058 8.96568 12.6892 8.83024 12.4912 8.71199C11.8188 8.31049 11.3383 8.14893 10.8295 7.97705L10.6948 7.93168C10.2926 7.79487 9.86494 7.76599 9.57688 7.76599C9.36925 7.76599 9.23244 7.78043 9.23244 7.78043L9.02481 7.80243L8.81856 7.82374L8.74156 8.01693L8.66388 8.21149C8.657 8.22937 8.50369 8.61987 8.37581 9.1678L8.35725 9.24687C8.24038 9.74118 8.09531 10.3572 8.22456 11.2977C8.25756 11.5356 8.3105 11.7686 8.38269 11.9927C7.49925 13.1381 7.05169 14.4994 7.05169 16.0421C7.05169 19.9574 8.94094 22.2489 12.8246 23.034C12.6912 23.3007 12.5874 23.5826 12.5139 23.8755C12.3784 23.9216 12.254 23.9525 12.144 23.9697C11.9804 23.9944 11.8092 24.0068 11.6359 24.0068C11.1643 24.0068 10.7938 23.9147 10.6494 23.8287C10.4342 23.7009 10.0499 23.3289 9.67725 22.7851C9.35894 22.3211 8.86256 21.714 8.30775 21.4603C7.82788 21.241 7.31981 21.1152 6.91281 21.1152C6.81794 21.1152 6.73063 21.1221 6.65431 21.1344C6.29888 21.1908 6.00188 21.3861 5.84031 21.6707C5.70075 21.9161 5.67875 22.2021 5.77981 22.4551C5.93038 22.8319 6.36488 23.1323 6.70313 23.3179C6.8695 23.4094 7.22906 23.7435 7.43875 24.0804C7.59619 24.3334 7.66906 24.5135 7.77013 24.7624C7.82994 24.9102 7.89594 25.0711 7.98531 25.2656C8.30844 25.9682 9.317 26.5884 9.43113 26.6564C9.98525 26.9885 10.9168 27.0951 11.6016 27.126L11.6861 27.1281H11.6868C11.8518 27.1281 12.0787 27.1122 12.3771 27.0792V28.8757C12.3784 29.2394 12.0079 29.3219 11.5177 29.3143L11.8937 29.4408C13.3341 29.9557 14.8809 30.25 16.5 30.25C18.1191 30.25 19.6659 29.9557 21.1083 29.4415L21.5916 29.2614C21.1028 29.2449 20.636 29.1651 20.6319 28.8722Z"
                      fill="url(#paint1_linear_32_91)"
                    />
                    <path
                      opacity="0.07"
                      d="M21.1619 29.4229C20.8828 29.4552 20.2812 29.348 20.2812 28.8764V24.8861C20.2812 24.134 20.0557 23.4073 19.6377 22.7879C23.7043 22.1299 25.6046 19.9739 25.6046 16.0421C25.6046 14.5042 25.1329 13.1587 24.2027 12.0395C24.2969 11.7886 24.3629 11.5239 24.4007 11.2509C24.5211 10.3737 24.3897 9.8168 24.2742 9.32524L24.2557 9.24549C24.1333 8.7223 23.9889 8.3538 23.9827 8.33868L23.9064 8.1448L23.6981 8.1228C23.6981 8.1228 23.5757 8.10974 23.3894 8.10974C23.1275 8.10974 22.7404 8.13518 22.3816 8.25755L22.2468 8.30293C21.7559 8.46862 21.2919 8.62468 20.6511 9.00693C20.4229 9.14305 20.1685 9.30324 19.8942 9.48405C18.8402 9.20837 17.6997 9.06812 16.5 9.06812C15.2886 9.06812 14.1384 9.20905 13.0769 9.48749C12.7999 9.3053 12.5441 9.14443 12.3145 9.00693C11.6737 8.62468 11.2097 8.46793 10.7188 8.30293L10.5841 8.25755C10.2259 8.13587 9.83812 8.10974 9.57619 8.10974C9.38987 8.10974 9.2675 8.1228 9.2675 8.1228L9.05987 8.1448L8.98219 8.33937C8.976 8.35449 8.83162 8.72299 8.70925 9.24618L8.69069 9.32593C8.5745 9.81749 8.44319 10.3737 8.56419 11.2509C8.60269 11.5307 8.67144 11.8016 8.76906 12.0581C7.85675 13.1718 7.39475 14.5104 7.39475 16.0421C7.39475 19.9629 9.29637 22.1182 13.3664 22.7837C13.0948 23.1894 12.9051 23.6466 12.8074 24.134C12.5806 24.2234 12.375 24.2825 12.1949 24.31C12.0141 24.3375 11.8257 24.3512 11.6352 24.3512C11.1609 24.3512 10.7051 24.2626 10.4734 24.1251C10.1709 23.9456 9.74669 23.4967 9.39262 22.9804C9.152 22.6297 8.67281 22.0062 8.16337 21.7738C7.72681 21.5744 7.271 21.4596 6.91144 21.4596C6.83581 21.4596 6.76706 21.4651 6.70656 21.4747C6.45494 21.5146 6.24731 21.648 6.13731 21.8419C6.04931 21.9959 6.03487 22.1739 6.09675 22.3286C6.21981 22.6366 6.67562 22.913 6.86606 23.0175C7.09637 23.144 7.49787 23.529 7.72819 23.9002C7.90075 24.178 7.98256 24.3794 8.08637 24.6338C8.14481 24.7775 8.20875 24.9342 8.29537 25.1233C8.52294 25.6176 9.22556 26.1353 9.60506 26.3629C10.1234 26.6736 11.0859 26.7602 11.6139 26.7836L11.6902 26.785C11.8958 26.785 12.2402 26.7541 12.7181 26.6922V28.8764C12.7181 29.4119 12.0367 29.4332 11.8697 29.4332C11.8484 29.4332 12.2155 29.5597 12.2155 29.5597C13.5651 30.0025 15.0026 30.25 16.5 30.25C17.9974 30.25 19.4349 30.0025 20.7838 29.5604C20.7838 29.5604 21.1832 29.4202 21.1619 29.4229Z"
                      fill="url(#paint2_linear_32_91)"
                    />
                    <path
                      d="M25.2615 16.0421C25.2615 14.454 24.7239 13.1367 23.8061 12.1041C23.9057 11.8806 24.0096 11.5809 24.0611 11.2041C24.1794 10.3448 24.0398 9.82914 23.9216 9.32451C23.8033 8.81989 23.6637 8.46514 23.6637 8.46514C23.6637 8.46514 23.0299 8.40051 22.4929 8.58339C21.956 8.76626 21.494 8.90583 20.8278 9.3032C20.5164 9.48883 20.2029 9.69233 19.9547 9.85733C18.8939 9.56308 17.7272 9.41183 16.5 9.41183C15.2618 9.41183 14.0848 9.56376 13.0164 9.86008C12.7676 9.69439 12.452 9.48951 12.1385 9.30251C11.4723 8.90514 11.0103 8.76558 10.4734 8.5827C9.93644 8.39983 9.30256 8.46445 9.30256 8.46445C9.30256 8.46445 9.163 8.8192 9.04475 9.32383C8.9265 9.82845 8.78694 10.3441 8.90519 11.2035C8.95812 11.5898 9.06537 11.8951 9.16781 12.1199C8.26719 13.1463 7.73919 14.4553 7.73919 16.0414C7.73919 20.1547 9.96119 22.0323 14.0099 22.528C13.5376 23.0271 13.2206 23.6665 13.1141 24.378C12.848 24.4949 12.5414 24.6049 12.2464 24.6489C11.4874 24.7637 10.6851 24.6489 10.2987 24.42C9.91237 24.191 9.45381 23.6754 9.11006 23.1735C8.81994 22.75 8.40125 22.2585 8.02175 22.0852C7.52056 21.8563 7.03312 21.7703 6.76156 21.813C6.48931 21.8563 6.36075 22.0563 6.41781 22.2C6.47487 22.343 6.74712 22.5582 7.03381 22.7156C7.3205 22.8731 7.76462 23.3028 8.02244 23.718C8.30981 24.1814 8.36619 24.4488 8.60956 24.9782C8.78075 25.3508 9.3665 25.8163 9.78381 26.0665C10.142 26.2817 10.8577 26.4041 11.6318 26.4391C11.8992 26.4515 12.5311 26.3731 13.0639 26.2975V28.8756C13.0639 29.315 12.6617 29.6491 12.2451 29.5721C13.5822 30.0217 15.0102 30.25 16.5 30.25C17.9891 30.25 19.4171 30.0217 20.7556 29.5734C20.3397 29.6498 19.9375 29.3156 19.9375 28.8763V24.8861C19.9375 23.9724 19.5752 23.1467 18.9936 22.5314C23.0127 22.0488 25.2615 20.2159 25.2615 16.0421ZM7.72681 22.4998C7.62094 22.4455 7.56387 22.3451 7.59962 22.2743C7.63537 22.2034 7.75087 22.1904 7.85675 22.2447C7.96262 22.299 8.01969 22.3994 7.98394 22.4702C7.94819 22.541 7.83269 22.5541 7.72681 22.4998ZM8.56006 23.0188C8.50437 23.0793 8.38475 23.0601 8.29262 22.9762C8.2005 22.8923 8.17094 22.7748 8.22662 22.7143C8.28231 22.6538 8.40194 22.673 8.49406 22.7569C8.58619 22.8408 8.61575 22.9583 8.56006 23.0188ZM9.07844 23.8782C9.00831 23.9277 8.88937 23.8816 8.81306 23.7751C8.73675 23.6685 8.73194 23.5413 8.80206 23.4918C8.87219 23.4423 8.99112 23.4884 9.06744 23.595C9.14306 23.7015 9.14856 23.8287 9.07844 23.8782ZM9.823 24.5251C9.77556 24.6021 9.64081 24.6056 9.52256 24.5334C9.40431 24.4612 9.34656 24.3402 9.394 24.2632C9.44144 24.1862 9.57619 24.1828 9.69444 24.2549C9.81269 24.3271 9.87044 24.4481 9.823 24.5251ZM10.527 25.1583C10.3806 25.1405 10.2719 25.049 10.2843 24.9541C10.296 24.8593 10.4246 24.7974 10.5703 24.8153C10.7167 24.8331 10.8254 24.9246 10.813 25.0194C10.8013 25.1136 10.6734 25.1762 10.527 25.1583ZM11.6621 25.3226C11.506 25.3137 11.3843 25.2243 11.3905 25.1239C11.3967 25.0236 11.528 24.9486 11.6841 24.9576C11.8401 24.9665 11.9618 25.0559 11.9556 25.1563C11.9494 25.2573 11.8181 25.3316 11.6621 25.3226ZM12.7332 25.2154C12.5668 25.2154 12.4321 25.1288 12.4321 25.0222C12.4321 24.9156 12.5668 24.829 12.7332 24.829C12.8996 24.829 13.0343 24.9156 13.0343 25.0222C13.0343 25.1288 12.8989 25.2154 12.7332 25.2154Z"
                      fill="white"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`card cursor-pointer `}>
        <div className="card-content-conatiner relative -top-6">
          <motion.div
            className={`card-content `}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
          >
            <div className=" " onClick={() => setOpenCard(true)}>
              <motion.img
                className="w-full h-48 object-cover bg-cover rounded-2xl"
                src={props.imageURL}
                alt={props.name}
              />

              <div className="p-4">
                <h3 className="heading max-w-fit">{props.name}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
