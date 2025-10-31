import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Turística',
      description:
        'Sistema integral de gestión para empresas turísticas desarrollado con bases de datos relacionales y PL/SQL. Incluye módulos de reservas, gestión de clientes, reportes analíticos y control de operaciones.',
      technologies: ['Oracle DB', 'PL/SQL', 'SQL Developer', 'Modelado ER'],
      github: '#', // Reemplazar con URL real del repositorio
    },
    {
      id: 2,
      title: 'Backend - Tienda Online de Perfumería',
      description:
        'Backend robusto para e-commerce de perfumería implementado con arquitectura de microservicios. Gestión de productos, inventario, carrito de compras, procesamiento de pedidos y autenticación de usuarios.',
      technologies: ['Spring Boot', 'Microservicios', 'Java', 'REST API', 'MySQL'],
      github: '#', // Reemplazar con URL real del repositorio
    },
    {
      id: 3,
      title: 'Frontend - E-commerce',
      description:
        'Interfaz moderna y responsive para tienda online desarrollada con React y Vite. Integración con backend XANO, carrito de compras interactivo, filtros avanzados de productos y proceso de checkout optimizado.',
      technologies: ['React', 'Vite', 'XANO', 'Tailwind CSS', 'REST API'],
      github: '#', // Reemplazar con URL real del repositorio
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="section-container bg-slate-100 dark:bg-slate-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Proyectos</h2>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Una selección de mis proyectos recientes que demuestran mis habilidades en desarrollo full-stack
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="card p-6 flex flex-col group"
          >
            {/* Título del Proyecto */}
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
              {project.title}
            </h3>

            {/* Descripción */}
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 rounded-full border border-sky-200 dark:border-sky-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Enlace a GitHub */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-400 font-medium transition-colors"
              whileHover={{ x: 5 }}
            >
              <FaGithub size={20} />
              Código Fuente
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8"
      >
        * Actualiza las URLs de GitHub en el código del componente Projects.jsx
      </motion.p>
    </section>
  );
};

export default Projects;
