import HText from "@/shared/HText";
import { BenefitType, SelectedPage} from "@/shared/types";
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon 
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from "@/shared/ActionButton";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilties",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100s of Different Classes",
        description: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert And Pro Trainers",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
]

const container= {
    hidden:{},
    visible:{
        transition:{ staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition ={{duration: 0.5}}
                variants={{
                    hidden:{opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
            >
                <HText>
                    MORE THAN JUST A GYM.
                </HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) =>(
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5}}
                                transition ={{duration: 0.5}}
                                variants={{
                                    hidden:{opacity: 0, x: 50},
                                    visible: {opacity: 1, x: 0}
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition ={{duration: 0.5}}
                        variants={{
                            hidden:{opacity: 0, x: 50},
                            visible: {opacity: 1, x: 0}
                        }}
                    >
                        <p className="my-5">
                        Mus mauris vitae ultricies leo. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. At quis risus sed vulputate odio. Mauris pellentesque pulvinar pellentesque habitant morbi. Nisi scelerisque eu ultrices vitae auctor eu. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Commodo elit at imperdiet dui accumsan sit.
                        </p>
                        <p className="mb-5">
                        Sed id semper risus in hendrerit gravida rutrum. Scelerisque fermentum dui faucibus in ornare quam. Pellentesque massa placerat duis ultricies. Viverra maecenas accumsan lacus vel facilisis volutpat. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi.
                        </p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits