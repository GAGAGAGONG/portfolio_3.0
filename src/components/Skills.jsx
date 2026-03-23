import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'React Native', 'JavaScript', 'Tailwind CSS', 'SCSS', 'HTML5 & CSS3']
    },
    {
      title: 'Game Development',
      skills: ['Unity', 'C#']
    },
    {
      title: 'Tools & Others',
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
              className="bg-[var(--color-secondary)]/30 rounded-lg p-8 shadow-md border border-transparent hover:border-[var(--color-accent)]/30 hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-6 border-b border-[var(--color-text-muted)]/20 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4 text-[var(--color-text-muted)]">
                {category.skills.map((skill, i) => (
                  <p key={i} className="font-mono text-sm group flex items-center justify-center gap-2">
                    <span className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">▹</span>
                    <span className="group-hover:text-[var(--color-accent)] transition-colors">{skill}</span>
                  </p>
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
