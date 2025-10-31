import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '', // 'success' | 'error' | ''
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    // Validación
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Por favor, completa todos los campos.',
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Por favor, ingresa un correo electrónico válido.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Configurar EmailJS
      // IMPORTANTE: Reemplaza estos valores con los tuyos de EmailJS
      const SERVICE_ID = 'service_x9stax3'; // Reemplazar
      const TEMPLATE_ID = 'template_c8ghxsh'; // Reemplazar
      const PUBLIC_KEY = '0BfVzfloWmZaDnwDe'; // Reemplazar

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'felipeignacionc24@gmail.com',
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito! Te responderé pronto.',
      });

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="section-container bg-white dark:bg-slate-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Contacto
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          ¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos!
        </motion.p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Formulario de Contacto */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-700'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>
            </form>
          </motion.div>

          {/* Otras opciones de contacto */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Otras formas de contacto
            </h3>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/56974161396"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg transform transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-4">
                <FaWhatsapp size={48} />
                <div>
                  <h4 className="text-xl font-bold mb-1">Hablemos por WhatsApp</h4>
                  <p className="text-green-100">Respuesta rápida garantizada</p>
                </div>
              </div>
            </motion.a>

            {/* Email directo */}
            <motion.a
              href="mailto:felipeignacionc24@gmail.com"
              className="block p-6 bg-sky-700 dark:bg-sky-600 hover:bg-sky-800 dark:hover:bg-sky-700 text-white rounded-xl shadow-lg transform transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-4">
                <FaEnvelope size={40} />
                <div>
                  <h4 className="text-xl font-bold mb-1">Enviar un correo</h4>
                  <p className="text-sky-100">felipeignacionc24@gmail.com</p>
                </div>
              </div>
            </motion.a>

            {/* Nota sobre EmailJS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-4 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-lg border border-amber-300 dark:border-amber-700"
            >
              <p className="text-sm font-medium">
                📝 <strong>Nota:</strong> Para que el formulario funcione, configura EmailJS en el componente Contact.jsx con tus credenciales (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY).
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
