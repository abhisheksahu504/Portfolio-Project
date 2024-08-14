import { motion } from "framer-motion";
import { EDUCATIONS } from "../constants";
const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-4xl text-center my-20"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATIONS.map((education, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-m text-neutral-400">
                {education.institute}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="font-semibold">
                {education.course} -&nbsp;
                <span className="text-purple-800 text-sm bg-neutral-900">
                  {education.year}
                </span>
              </h6>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
