import { motion } from 'framer-motion';
import { MonitorSmartphone, Gamepad2, Settings2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <MonitorSmartphone className="w-10 h-10 mb-4 text-[var(--color-accent)]" strokeWidth={1.5} />,
      skills: ['React', 'React Native', 'JavaScript', 'Tailwind CSS', 'SCSS', 'HTML5 & CSS3']
    },
    {
      title: 'Game Development',
      icon: <Gamepad2 className="w-10 h-10 mb-4 text-[var(--color-accent)]" strokeWidth={1.5} />,
      skills: ['Unity', 'C#']
    },
    {
      title: 'Tools & Others',
      icon: <Settings2 className="w-10 h-10 mb-4 text-[var(--color-accent)]" strokeWidth={1.5} />,
      skills: ['Git & GitHub', 'Figma', 'Antigravity']
    }
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-[var(--color-primary)] text-[var(--color-text-main)] py-24">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

        <motion.div
          className="pb-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold inline text-[var(--color-text-main)] flex-shrink-0">
            My Skills
          </h2>
          <div className="h-[1px] bg-[var(--color-secondary)] w-full max-w-[300px]"></div>
        </motion.div>

        <div className="w-full grid md:grid-cols-3 gap-8 text-center pt-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative bg-[var(--color-secondary)]/30 rounded-xl p-8 shadow-md border border-transparent hover:border-[var(--color-accent)]/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-accent)]/5 group-hover:to-transparent transition-all duration-500 rounded-xl -z-10"></div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-6 tracking-wide">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-3 w-full">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-[var(--color-primary)] rounded-full text-sm font-mono text-[var(--color-text-muted)] border border-[var(--color-text-muted)]/20 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_15px_var(--color-accent)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
