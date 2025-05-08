import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Master Spice Blender",
      image: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg",
      description: "With over 15 years of experience in spice blending, Sarah ensures our blends are perfectly balanced."
    },
    {
      name: "Michael Chen",
      role: "Quality Control Expert",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
      description: "Michael's expertise ensures that only the finest spices make it to your kitchen."
    },
    {
      name: "Priya Patel",
      role: "Sourcing Specialist",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      description: "Priya travels the world to find the most exceptional spices from trusted farmers."
    }
  ];

  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "50+", label: "Premium Products" },
    { number: "100K+", label: "Happy Customers" },
    { number: "30+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen pt-24 bg-spice-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div 
          className="container-custom py-16 md:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-spice-brown mb-6">
                Our Journey in the World of Spices
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Since 2003, Spice Delights has been on a mission to bring the finest spices from around the world to your kitchen. Our journey began with a simple passion for authentic flavors and has grown into a commitment to quality and sustainability.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/6401671/pexels-photo-6401671.jpeg"
                alt="Spice Collection"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-spice-brown text-white py-16">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-spice-orange mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-spice-brown mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Spice Delights, our values guide everything we do, from sourcing to delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Sustainability",
                description: "We're committed to sustainable farming practices and ethical sourcing."
              },
              {
                icon: "✨",
                title: "Quality",
                description: "Every spice undergoes rigorous quality checks to ensure excellence."
              },
              {
                icon: "🤝",
                title: "Community",
                description: "We support local farmers and communities in spice-growing regions."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-spice-cream p-8 rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-spice-brown mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-spice-cream">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-spice-brown mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate experts behind our premium spice selections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-spice-orange">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
