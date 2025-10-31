import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-container bg-white dark:bg-slate-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Sobre Mí
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Soy Felipe Norambuena, me encuentro por finalizar mi segundo año de{' '}
            <span className="font-semibold text-sky-700 dark:text-sky-400">
              Ingeniería en Informática
            </span>{' '}
            en Instituto Educacional DUOC UC, sede Maipú (Santiago de Chile).
          </p>

          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            Me interesa el desarrollo de software y sitios web,{' '}
            <span className="font-semibold text-sky-700 dark:text-sky-400">
              eCommerce
            </span>
            , experiencias con bases de datos, front-end, back-end y herramientas No-Code.
          </p>

          <motion.a
            href="/CVFelipeNorambuena.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload size={20} />
            Descargar CV
          </motion.a>
        </motion.div>

        {/* Sección de Tecnologías */}
        <motion.div
          variants={itemVariants}
          className="max-w-5xl mx-auto mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-8">
            Tecnologías
          </h3>

          {/* Contenedor vacío y estilizado para agregar logos posteriormente */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700">
            <div className="flex items-center justify-center h-24 bg-white dark:bg-slate-700 rounded-lg shadow-md">
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center px-4">
                Logo de tecnología
              </p>
            </div>
            <div className="flex items-center justify-center h-24 bg-white dark:bg-slate-700 rounded-lg shadow-md">
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center px-4">
                Logo de tecnología
              </p>
            </div>
            <div className="flex items-center justify-center h-24 bg-white dark:bg-slate-700 rounded-lg shadow-md">
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center px-4">
                Logo de tecnología
              </p>
            </div>
            <div className="flex items-center justify-center h-24 bg-white dark:bg-slate-700 rounded-lg shadow-md">
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center px-4">
                Logo de tecnología
              </p>
            </div>
            <div className="flex items-center justify-center h-24 bg-white dark:bg-slate-700 rounded-lg shadow-md">
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center px-4">
                Logo de tecnología
              </p>
            </div>
            <div className="flex items-center justify-center h-24 bg-white dark:bg-slate-700 rounded-lg shadow-md">
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center px-4">
                Logo de tecnología
              </p>
            </div>
            <div className="flex items-center justify-center h-24 bg-white dark:bg-slate-700 rounded-lg shadow-md">
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center px-4">
                Logo de tecnología
              </p>
            </div>
            <div className="flex items-center justify-center h-24 bg-white dark:bg-slate-700 rounded-lg shadow-md">
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center px-4">
                Logo de tecnología
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
            * Los logotipos de tecnologías se agregarán posteriormente
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
