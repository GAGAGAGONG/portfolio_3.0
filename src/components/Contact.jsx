import { motion } from 'framer-motion';
import { Facebook, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import cvFile from '../files/CV.pdf';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-[70vh] bg-[var(--color-primary)] flex flex-col justify-center items-center py-20 px-4">
      <motion.div
        className="max-w-[800px] w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[var(--color-accent)] font-mono mb-4 text-lg">What's Next?</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-[var(--color-text-main)] mb-6">
          Get In Touch
        </h2>
        <p className="text-[var(--color-text-muted)] mb-8 text-lg">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Contact Info Text Box */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12 bg-[var(--color-secondary)]/30 py-6 px-8 rounded-2xl border border-[var(--color-text-muted)]/20 shadow-lg">
          <div className="flex items-center gap-4 hover:-translate-y-1 transition-transform group cursor-pointer">
            <div className="bg-[var(--color-primary)] p-3 rounded-full group-hover:bg-[var(--color-accent)]/10 transition-colors">
              <Phone className="text-[var(--color-accent)]" size={24} />
            </div>
            <span className="font-mono text-[var(--color-text-main)]">+66 65 580 3159</span>
          </div>

          <div className="flex items-center gap-4 hover:-translate-y-1 transition-transform group cursor-pointer">
            <div className="bg-[var(--color-primary)] p-3 rounded-full group-hover:bg-[var(--color-accent)]/10 transition-colors">
              <Mail className="text-[var(--color-accent)]" size={24} />
            </div>
            <span className="font-mono text-[var(--color-text-main)]">kranathip6765@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 hover:-translate-y-1 transition-transform group cursor-default">
            <div className="bg-[var(--color-primary)] p-3 rounded-full group-hover:bg-[var(--color-accent)]/10 transition-colors">
              <MapPin className="text-[var(--color-accent)]" size={24} />
            </div>
            <span className="font-mono text-[var(--color-text-main)]">Thailand</span>
          </div>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://www.facebook.com/kranathip.introrathed/"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_0_8px_var(--color-accent)]"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/_kntp.04/"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_0_8px_var(--color-accent)]"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://github.com/GAGAGAGONG"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_0_8px_var(--color-accent)]"
          >
            <Github size={32} />
          </a>
          <a
            href="mailto:example@gmail.com"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_0_8px_var(--color-accent)]"
          >
            <Mail size={32} />
          </a>
        </div>



        <a
          href={cvFile}
          download="Kranathip-CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--color-accent)] border-2 border-[var(--color-accent)] px-8 py-4 rounded font-mono hover:bg-[var(--color-accent)]/10 hover:shadow-[0_0_15px_var(--color-accent)] transition-all duration-300 inline-block"
        >
          Download CV
        </a>
      </motion.div>

      {/* Footer text */}
      <motion.div
        className="mt-32 text-[var(--color-text-muted)] font-mono text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="hover:text-[var(--color-accent)] transition-colors cursor-default text-center">
          Built with React & Tailwind CSS
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
