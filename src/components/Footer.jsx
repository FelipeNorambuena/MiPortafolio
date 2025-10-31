import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/FelipeNorambuena',
      color: 'hover:text-slate-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/felipe-norambuena-cabezas/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-300 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-600 dark:text-slate-400 ${link.color} transition-colors`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                <link.icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-slate-300 dark:bg-slate-700"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © {currentYear} Felipe Norambuena. Todos los derechos reservados.
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-xs mt-2">
              Desarrollado con React, Vite y Tailwind CSS
            </p>
          </motion.div>

          {/* Nota de configuración */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-xs text-slate-500 dark:text-slate-500 max-w-md"
          >
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
