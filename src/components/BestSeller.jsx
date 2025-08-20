"use client"

import { useContext, useEffect, useState, useRef } from "react"
import { ShopContext } from "../context/ShopContext"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "./ui/button"
import ProductItem from "./ProductItem"
import { useNavigate } from "react-router-dom"

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const [bestseller, setBestseller] = useState([])
  const navigate = useNavigate()
  const containerRef = useRef(null)

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -15])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9])

  useEffect(() => {
    const bestProducts = products.filter((product) => product.bestseller)
    setBestseller(bestProducts.slice(0, 6))
  }, [products])

  if (bestseller.length === 0) return null

  const hero = bestseller[0]
  const rest = bestseller.slice(1)

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className="relative py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
            Best Sellers
          </h2>
          <Button
            variant="link"
            className="text-blue-600 hover:text-blue-700 text-lg font-normal p-0 h-auto"
            onClick={() => navigate("/collection")}
          >
            Compare all models →
          </Button>
        </div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mb-10"
        >
          <div className="relative flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden min-h-[320px] md:min-h-[340px]">
            {/* Image */}
            <div className="relative md:w-1/2 w-full min-h-[220px] md:min-h-[340px] bg-gray-100 flex items-center justify-center overflow-hidden group">
              <motion.img
                src={hero.image?.[0] || "/placeholder-image.jpg"}
                alt={hero.name}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                style={{ aspectRatio: "1/1" }}
                onError={e => (e.target.src = "/placeholder-image.jpg")}
              />
              <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-1.5 text-xs font-semibold rounded-full shadow">
                #1 Best Seller
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full shadow text-sm font-medium">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {hero.rating || 4.8}
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col justify-center p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                {hero.name}
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-light mb-4 line-clamp-3">
                {hero.description}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  ${hero.discount ? (hero.price * (1 - hero.discount / 100)).toFixed(2) : hero.price}
                </span>
                {hero.discount && (
                  <span className="text-lg line-through text-gray-400">
                    ${hero.price}
                  </span>
                )}
                {hero.discount && (
                  <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                    -{hero.discount}%
                  </span>
                )}
              </div>
              <Button
                onClick={() => navigate(`/product/${hero._id}`)}
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full font-medium shadow hover:shadow-lg transition-all duration-300 border-0 w-fit"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Best Seller Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {rest.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group"
              >
                <ProductItem
                  id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                  sizeQuantities={product.sizeQuantities}
                  description={product.description}
                  rating={product.rating}
                  // Make sure ProductItem is using a fixed size as in previous answer
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-14"
        >
          <Button
            onClick={() => navigate("/collection")}
            className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium rounded-full shadow-none hover:shadow-lg transition-all duration-300 border-0"
          >
            View All Best Sellers
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BestSeller
