import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CLEAR THE AIR",
      description: "The Digital Learning Material about The Danger of E-cigarettes.",
      tools: ["Unity", "C#"],
      github: "https://github.com/",
      demo: "https://epidemiology-unit.itch.io/clear-the-air"
    },
    {
      id: 2,
      title: "Overcooked Online Exhibition Website",
      description: "An online exhibition website for the Overcooked Exhibition.",
      tools: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/",
      demo: "https://cmdt-uic.psu.ac.th/Overcooked_exhibition/"
    },

  ];

  return (
    <div name="projects" className="w-full min-h-screen bg-[var(--color-primary)] text-[var(--color-text-main)] py-24">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          className="pb-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold inline text-[var(--color-text-main)] flex-shrink-0">

            My Projects
          </h2>
          <div className="h-[1px] bg-[var(--color-secondary)] w-full max-w-[300px]"></div>
        </motion.div>

        {/* Grid Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[var(--color-secondary)]/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_var(--color-accent)] transition-all duration-300 flex flex-col group border border-transparent hover:border-[var(--color-accent)]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-6">
                <Folder className="text-[var(--color-accent)]" size={40} />
                <div className="flex gap-4">
                  <a href={project.github} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                {project.title}
              </h3>

              <p className="text-[var(--color-text-muted)] text-sm mb-6 flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3 text-xs font-mono text-[var(--color-text-muted)]">
                {project.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
