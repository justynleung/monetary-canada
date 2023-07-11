
// Style
import '../css/loading-page.css';

import { motion } from "framer-motion"

export default function LoadingPage(props) {
    const pathVariants = {
        hidden: {
            pathLength: 0
        },
        visible: {
            pathLength: 1,
            transition: { duration: 1.2, repeat: Infinity, repeatDelay: 0.5 }
        }
    }

    const divVariants = {
        fadeOut: {
            opacity: 0
        },
        fadeIn: {
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }
    return (
        <div className={`loading-page-wrapper ${props.className}`}>
            <div className='loading-animation'>
                <svg className="animated-logo" xmlns="http://www.w3.org/2000/svg" width={104} height={104}>
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        fill="none"
                        d="m 9.8253713,94.476819 c 0,0 11.8237497,-6.27179 19.8739597,-32.752694 8.05021,-26.48089 5.28295,-37.49137 12.45267,-16.72477 7.16971,20.76659 14.96835,24.80841 21.63493,-3.48433 6.66658,-28.29275 6.41501,-41.25444982 9.8112,-24.80842 3.39618,16.44603 13.081595,29.96522 17.106695,30.66209 4.02511,0.69686 4.02511,0.69686 4.02511,0.69686"
                        style={{
                            stroke: "#ff652f",
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                        }}
                        variants={pathVariants}
                    />
                </svg>
                <motion.div className="loading-text"
                    initial="fadeOut"
                    animate="fadeIn"
                    variants={divVariants}>
                    Financial growth takes time
                </motion.div>
            </div>
        </div>
    )
}
