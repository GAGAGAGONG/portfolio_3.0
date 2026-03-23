import { motion } from 'framer-motion';

const Achievements = () => {
  const experiences = [
    {
      id: 1,
      date: '1 November 2024 - 28 February 2025',
      title: 'Cooperative Education',
      description: 'Cooperative Education at The Epidemiology Unit, Faculty of Medicine, Prince of Songkla University.'
    },
    {
      id: 2,
      date: '24-25 July 2025',
      title: '9th TICC International Conference',
      description: 'Speaker at the 9th TICC International Conference, presenting on “CLEAR THE AIR: Co-developing E-cigarette Risk Awareness for Thai Adolescents.”.'
    },
    {
      id: 3,
      date: '28 August – 7 September 2025',
      title: 'Pakktaii design week 2025 ‘Spark of Gems Exhibition’',
      description: 'Showcased “CLEAR THE AIR” in the “Spark of Gems” section, highlighting an interactive project on e-cigarette risk awareness.'
    },
    {
      id: 4,
      date: '13-16 November 2025',
      title: 'G-STAR Exhibition 2025',
      description: 'Showcased “CLEAR THE AIR” at G-STAR Exhibition 2025, Busan, South Korea, in collaboration with Dongseo University.'
    },
    {
      id: 5,
      date: '18 November 2025',
      title: 'Runner-up in the Innovation Prototype and Social Media Competition',
      description: 'Runner-up, Innovation Prototype & Social Media Competition Under the Comprehensive and Sustainable Smoke-Free, E-cigarette-Free, and Tobacco-Free University Development Project, recognizing work on health-focused innovation and awareness.'
    },
    {
      id: 6,
      date: '5-8 Febuary 2026',
      title: 'SOUTHERN INNOVATION TECHNOLOGY EXPO 2026',
      description: 'Showcased “CLEAR THE AIR” as a representative of PSUIC, presenting an interactive project on e-cigarette risk awareness.'
    },
    {
      id: 7,
      date: '19-21 March 2026',
      title: 'Overcooked Exhibition',
      description: 'Showcased “CLEAR THE AIR” at the Overcooked Exhibition, organized by PSUIC students.'
    }
  ];

  return (
    <div name="achievements" className="w-full min-h-screen bg-[var(--color-primary)] text-[var(--color-text-main)] py-24">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          className="pb-12 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold inline text-[var(--color-text-main)] flex-shrink-0">
            <span className="text-[var(--color-accent)] font-mono text-xl mr-2">03.</span>
            My Achievements
          </h2>
          <div className="h-[1px] bg-[var(--color-secondary)] w-full max-w-[300px]"></div>
        </motion.div>

        <div className="relative wrap overflow-hidden p-2 sm:p-10 h-full">
          {/* Vertical line through the middle (desktop) or left (mobile) */}
          <div className="absolute border-opacity-20 border-[var(--color-text-muted)] h-full border left-[15px] md:left-1/2 rounded -translate-x-1/2"></div>

          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse left-timeline' : 'md:flex-row right-timeline'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="order-1 hidden md:block md:w-5/12"></div>

              {/* Timeline Dot */}
              <div className="z-20 flex absolute left-[15px] md:static items-center order-1 w-4 h-4 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)] -translate-x-1/2 md:-translate-x-0"></div>

              <div className="order-1 bg-[var(--color-secondary)]/50 rounded-lg shadow-xl w-[calc(100%-40px)] ml-[40px] md:ml-0 md:w-5/12 px-6 py-4 border border-transparent hover:border-[var(--color-accent)]/30 transition-colors">
                <h3 className="mb-1 font-bold text-[var(--color-text-main)] text-xl">{item.title}</h3>
                <h4 className="mb-3 font-mono text-sm text-[var(--color-accent)]">{item.date}</h4>
                <p className="text-sm leading-snug tracking-wide text-[var(--color-text-muted)] text-opacity-100">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
