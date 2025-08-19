import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home, Search, ArrowLeft, ShoppingBag } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl mx-auto"
      >
        {/* Animated 404 with floating elements */}
        <motion.div 
          className="relative mb-8"
          variants={itemVariants}
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="text-8xl md:text-9xl font-bold text-gray-200 select-none"
          >
            404
          </motion.div>
          
          {/* Floating icons */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-4 left-1/4 text-blue-300"
          >
            <ShoppingBag className="w-8 h-8" />
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-8 right-1/4 text-purple-300"
          >
            <Search className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Main content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            The page you're looking for seems to have wandered off. 
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>
          
          <p className="text-base text-gray-500">
            Let's get you back to discovering amazing products.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="flex items-center justify-center px-6 py-3 text-base font-medium rounded-full hover:bg-gray-50 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            className="flex items-center justify-center px-6 py-3 text-base font-medium bg-black text-white hover:bg-gray-800 rounded-full transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
          
          <Button
            onClick={() => navigate('/collection')}
            variant="outline"
            className="flex items-center justify-center px-6 py-3 text-base font-medium rounded-full hover:bg-gray-50 transition-all duration-300"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Shop Now
          </Button>
        </motion.div>

        {/* Helpful links */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button 
              onClick={() => navigate('/collection')}
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              Shop Collection
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              Shopping Cart
            </button>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* Subtle background patterns */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-200 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-200 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-yellow-200 rounded-full opacity-30"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
