import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'whole-spices', name: 'Whole Spices' },
    { id: 'ground-spices', name: 'Ground Spices' },
    { id: 'blends', name: 'Spice Blends' },
    { id: 'organic', name: 'Organic' },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Saffron",
      category: "whole-spices",
      price: "$15.99",
      image: "https://images.pexels.com/photos/4198843/pexels-photo-4198843.jpeg",
      isOrganic: true,
      description: "Hand-picked premium quality saffron threads"
    },
    {
      id: 2,
      name: "Ground Turmeric",
      category: "ground-spices",
      price: "$9.99",
      image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg",
      isOrganic: true,
      description: "Pure organic ground turmeric root"
    },
    {
      id: 3,
      name: "Garam Masala",
      category: "blends",
      price: "$12.99",
      image: "https://images.pexels.com/photos/6401669/pexels-photo-6401669.jpeg",
      isOrganic: false,
      description: "Traditional Indian spice blend"
    },
    {
      id: 4,
      name: "Black Peppercorns",
      category: "whole-spices",
      price: "$8.99",
      image: "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg",
      isOrganic: true,
      description: "Premium black peppercorns"
    },
    {
      id: 5,
      name: "Cinnamon Sticks",
      category: "whole-spices",
      price: "$7.99",
      image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg",
      isOrganic: true,
      description: "Ceylon cinnamon sticks"
    },
    {
      id: 6,
      name: "Curry Powder",
      category: "blends",
      price: "$10.99",
      image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg",
      isOrganic: false,
      description: "Traditional curry powder blend"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => 
        selectedCategory === 'organic' 
          ? product.isOrganic 
          : product.category === selectedCategory
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-spice-cream pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-spice-brown mb-4">
            Our Premium Spices
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our extensive collection of premium spices, carefully sourced from the finest regions around the world.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-spice-brown text-white'
                  : 'bg-white text-spice-brown hover:bg-spice-brown hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.isOrganic && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      Organic
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-spice-brown px-6 py-2 rounded-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
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
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
