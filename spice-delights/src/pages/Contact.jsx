import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Visit Us",
      details: ["123 Spice Market Street", "Flavor District", "New York, NY 10001"]
    },
    {
      icon: "fas fa-phone-alt",
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: "fas fa-envelope",
      title: "Email Us",
      details: ["info@spicedelights.com", "support@spicedelights.com"]
    },
    {
      icon: "fas fa-clock",
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-spice-cream">
      {/* Header Section */}
      <motion.section 
        className="relative bg-spice-brown text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container-custom text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Have questions about our products or services? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                ref={ref}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-center p-6 bg-spice-cream rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <i className={`${info.icon} text-3xl text-spice-orange mb-4`}></i>
                <h3 className="text-xl font-semibold text-spice-brown mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-spice-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-spice-brown mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-spice-orange focus:ring-2 focus:ring-spice-orange/20 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-spice-orange focus:ring-2 focus:ring-spice-orange/20 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-spice-orange focus:ring-2 focus:ring-spice-orange/20 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-spice-orange focus:ring-2 focus:ring-spice-orange/20 transition-colors duration-300"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg"
                  alt="Location"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Additional Information */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-spice-brown mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <i className="fas fa-info-circle text-spice-orange mr-2"></i>
                    For wholesale inquiries, please contact our business development team directly.
                  </p>
                  <p className="text-gray-600">
                    <i className="fas fa-truck text-spice-orange mr-2"></i>
                    We offer worldwide shipping to most countries.
                  </p>
                  <p className="text-gray-600">
                    <i className="fas fa-headset text-spice-orange mr-2"></i>
                    Customer support is available during business hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
