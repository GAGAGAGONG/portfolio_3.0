import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { Code2, MonitorPlay, Gamepad2, FileCode2 } from 'lucide-react';
import my_img from '../assets/my_img.JPG';

const Hero = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-[var(--color-primary)] flex items-center pt-24 md:pt-0">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between h-full w-full gap-12 lg:gap-8">

        {/* Text Area */}
        <div className="flex flex-col justify-center flex-1 w-full order-2 md:order-1 pb-16 md:pb-0">
          <motion.p
            className="text-[var(--color-accent)] font-mono mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-7xl font-bold text-[var(--color-text-main)] leading-tight pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kranathip Intorrathed
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-5xl lg:text-4xl font-bold text-[var(--color-text-muted)] mt-2 leading-tight pb-2 h-[40px] sm:h-[60px] lg:h-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Game Developer',
                2000,
                'Frontend Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-[var(--color-accent)]"
              repeat={Infinity}
            />
          </motion.h2>

          <motion.p
            className="text-[var(--color-text-muted)] py-4 max-w-[600px] leading-relaxed mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I have experience in building games using Unity and developing web applications with React. Passionate about creating engaging user experiences and educational games. Able to work collaboratively and deliver practical, user-focused solutions.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-[var(--color-accent)] group border-2 border-[var(--color-accent)] px-6 py-3 my-2 flex items-center gap-2 hover:bg-[var(--color-accent)]/10 hover:shadow-[0_0_15px_var(--color-accent)] transition-all duration-300 rounded font-mono w-max">
                View My Work
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.div
          className="flex-1 w-full max-w-[300px] lg:max-w-[350px] flex justify-center items-center order-1 md:order-2 mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative group w-full aspect-square">
            {/* Outline Offset Box */}
            <div className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 ease-in-out pointer-events-none"></div>

            {/* Image Placeholder */}
            <div className="relative w-full h-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/80 backdrop-grayscale-[0.5] group-hover:backdrop-grayscale-0 overflow-hidden rounded-lg flex items-center justify-center -translate-x-1 -translate-y-1 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_-15px_var(--color-primary)]">
              <img className="w-full h-full object-cover" src={my_img} alt="" />
              <div className="absolute "></div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
