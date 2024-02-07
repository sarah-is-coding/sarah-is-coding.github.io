import { experience } from "../Constants/constants"; 
import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import ExperienceCard from "../Components/ExperienceCard";

const Experience = () => {
  return (
    <div id="experience" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <SectionTitle title="EXPERIENCE" subtitle="My Professional Timeline" />
        <div className="flex flex-col gap-10 mt-10">
          {experience.map((exp) => ( // Use 'experience' imported from constants
            <LazyMotion features={domAnimation} strict key={exp.id}>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                <ExperienceCard {...exp} />
              </m.div>
            </LazyMotion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
