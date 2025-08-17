import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Heart, Globe, Shield, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Aboutus = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  // Apple-style subtle parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

  const stats = [
    { icon: Users, number: "50K+", label: "Happy Customers" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Heart, number: "500+", label: "Products Created" },
    { icon: Globe, number: "25+", label: "Countries Served" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "Every piece is crafted with premium materials and attention to detail that stands the test of time"
    },
    {
      icon: Heart,
      title: "Customer Centric",
      description: "We prioritize your satisfaction and style preferences, creating pieces that make you feel confident"
    },
    {
      icon: Leaf,
      title: "Sustainable Future",
      description: "Committed to ethical sourcing and eco-friendly practices for a better tomorrow"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light leading-relaxed mb-8"
          >
            Celebrating fashion, sustainability, and quality since 2019. 
            We're more than just a brand — we're a movement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button 
              onClick={() => navigate('/collection')}
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full shadow-none hover:shadow-lg transition-all duration-300"
            >
              Explore Our Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        ref={containerRef}
        style={{ y, opacity }}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-8 tracking-tight">
              Our Story
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              We started with a vision to redefine fashion through sustainability and quality. 
              Our journey began in 2019, and today, we're proud to be a leading name in 
              eco-friendly fashion that doesn't compromise on style or comfort.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-gray-900" />
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Collections */}
      <motion.section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-8 tracking-tight">
              Featured Collections
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              Discover our seasonal collections that blend timeless elegance with contemporary flair
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                season: "Summer Collection", 
                img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=400&fit=crop&q=80",
                description: "Light, breathable pieces perfect for warm weather"
              },
              { 
                season: "Winter Collection", 
                img: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=600&h=400&fit=crop&q=80",
                description: "Cozy, warm styles for the colder months"
              },
              { 
                season: "Accessories", 
                img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop&q=80",
                description: "Complete your look with our premium accessories"
              }
            ].map((item, index) => (
              <motion.div
                key={item.season}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.season}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.season}</h3>
                  <p className="text-gray-600 font-light mb-6">{item.description}</p>
                  <Button 
                    onClick={() => navigate('/collection')}
                    className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Shop {item.season}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sustainability Promise */}
      <motion.section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Leaf className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-8 tracking-tight">
              Our Commitment to Sustainability
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              We believe in ethical sourcing, reducing waste, and crafting products that last. 
              Every purchase you make supports a greener planet and a better future for fashion.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Aboutus;
