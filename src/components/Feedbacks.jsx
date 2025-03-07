import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {styles} from '../styles';
import { achievements } from "../constants";

const FeedbackCard = ({index, achievement, organization, competition, image})=> (
  <motion.div variants={fadeIn("","spring",index*0.5,0.75)} className="bg-black-100 rounded-3xl p-10 xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{achievement}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]"><span className="blue-text-gradient">@</span>{organization}</p>
          <p className="mt-1 text-secondary text-[12px]">{competition}</p>
        </div>
        <img src={image}
        alt={`organized-by-${organization}`}
        className="w-13 h-10 rounded-xl object-cover"/>
      </div>
    </div>
    
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have accomplished</p>
        <h2 className={`${styles.sectionHeadText}`}>Achievements</h2>
      </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {achievements.map((achievement,index)=>(
          <FeedbackCard 
          key={achievement.organization}
          index={index}
          {...achievement}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")