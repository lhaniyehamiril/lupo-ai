import { ErrorIcon } from "../icons/ErrorIcon";
import { motion } from "motion/react";
const variantBox = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const BoxError = () => {
  return (
    <motion.div
      variants={variantBox}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-[#eee] rounded-[1rem] flex py-3 px-6 relative mt-3"
    >
      <div className="absolute -top-3 -left-3">
        <ErrorIcon />
      </div>

      <span className="font-bold z-55">try again </span>
    </motion.div>
  );
};
