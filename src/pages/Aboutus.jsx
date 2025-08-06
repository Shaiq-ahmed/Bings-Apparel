import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Star, Users, Award, Heart, Globe, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Aboutus = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);

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
      description: "Every piece is crafted with premium materials and attention to detail"
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "We prioritize your satisfaction and style preferences above all"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving fashion enthusiasts worldwide with our unique collections"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Celebrating fashion, sustainability, and quality since 2019. 
            We're more than just a brand - we're a movement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              onClick={() => navigate('/collection')}
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
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
        className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We started with a vision to redefine fashion through sustainability and quality. 
              Our journey began in 2019, and today, we are proud to be a leading name in 
              eco-friendly fashion that doesn't compromise on style or comfort.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Collections */}
      <motion.section 
        className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.season}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.season}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-black"
                      onClick={() => navigate('/collection')}
                    >
                      Shop {item.season}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sustainability Promise */}
      <motion.section 
        className="relative py-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Commitment to Sustainability
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
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
