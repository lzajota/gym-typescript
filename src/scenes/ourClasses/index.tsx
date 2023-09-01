import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Transform your physique with our intensive weight training classes. Our expert trainers will teach you proper lifting techniques, help you build strength, and sculpt the body you've always wanted.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Discover tranquility and flexibility in our rejuvenating yoga classes. Our experienced instructors will guide you through a variety of yoga styles, helping you find balance, reduce stress, and improve your overall well-being.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Get that strong and toned core you've always dreamed of with our specialized ab and core classes. Our trainers will target those hard-to-reach muscles, helping you achieve a rock-solid midsection. Say goodbye to belly fat and hello to a stronger core.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embrace the great outdoors with our adventure fitness classes. Whether it's hiking, kayaking, or outdoor circuit training, we offer exhilarating workouts in the natural world. Experience fitness in a whole new way while connecting with nature and fellow fitness enthusiasts.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
    "Our wide range of fitness classes caters to all fitness levels and preferences. From heart-pumping HIIT workouts to stress-reducing Pilates, we have classes to suit every need. Join us and experience fun, energy, and results in every session.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Elevate your fitness game with our specialized training classes. Whether you're preparing for a marathon, improving your athletic performance, or seeking functional fitness, our expert trainers will guide you through customized training programs to help you reach your peak potential. Don't settle for ordinary – train like a pro with us.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Get ready to sweat and smile in our exciting fitness classes! From high-intensity interval training to calming yoga sessions, we've got a variety of classes suitable for all fitness levels. There's something for everyone at our gym.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
