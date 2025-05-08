import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Saffron",
      description: "Hand-picked premium quality saffron threads",
      image: "https://images.pexels.com/photos/4198843/pexels-photo-4198843.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$15.99"
    },
    {
      id: 2,
      name: "Organic Turmeric",
      description: "Pure organic ground turmeric root",
      image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$9.99"
    },
    {
      id: 3,
      name: "Cardamom Pods",
      description: "Fresh green cardamom pods",
      image: "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$12.99"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-spice-brown to-spice-red"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Spices Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20 text-white text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover the World of
            <span className="text-spice-orange block mt-2">Premium Spices</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Elevate your culinary experience with our carefully curated collection of premium spices
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="btn-primary">
              Explore Collection
            </button>
            <button className="px-6 py-3 bg-white text-spice-brown rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </motion.div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-20 bg-spice-cream" ref={ref}>
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-spice-brown mb-4">
              Featured Products
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium spices, carefully sourced from the finest regions around the world.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-spice-brown mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-spice-red font-bold text-lg">{product.price}</span>
                    <button className="px-4 py-2 bg-spice-brown text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl font-bold text-spice-brown">Why Choose Our Spices?</h2>
              <p className="text-gray-600">
                We take pride in delivering the highest quality spices sourced directly from trusted farmers and producers worldwide.
              </p>
              <ul className="space-y-4">
                {[
                  "Premium Quality Guaranteed",
                  "Ethically Sourced",
                  "Fresh & Authentic",
                  "Expert Selection",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <i className="fas fa-check-circle text-spice-orange"></i>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary mt-6"
              >
                Learn More About Us
              </motion.button>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/6401669/pexels-photo-6401669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Spice Selection"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-spice-orange text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">20+</h3>
                <p>Years of Excellence</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
