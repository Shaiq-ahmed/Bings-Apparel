"use client"

import React, { useEffect, useState, useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Pause } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"
import { useNavigate } from 'react-router-dom'
import { LazyImage, HeroSkeleton } from './ui/loading'

// High-quality hero images from Unsplash with better composition
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80",
    title: "Street Style Collection",
    subtitle: "Where urban meets luxury. Discover our latest streetwear drops that define the culture.",
    cta: "Shop Street Style"
  },
  {
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&h=1080&fit=crop&q=80",
    title: "Premium Athleisure",
    subtitle: "Performance meets style. Elevate your everyday look with our premium athleisure collection.",
    cta: "Explore Athleisure"
  },
  {
    src: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=1920&h=1080&fit=crop&q=80",
    title: "Limited Edition Drops",
    subtitle: "Exclusive pieces that define the culture. Don't miss out on our limited edition releases.",
    cta: "View Limited Edition"
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=1080&fit=crop&q=80",
    title: "Seasonal Collections",
    subtitle: "Fresh styles for every season. Stay ahead of the curve with our latest seasonal drops.",
    cta: "Shop Seasonal"
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&q=80",
    title: "Luxury Streetwear",
    subtitle: "Where sophistication meets street culture. Experience the perfect blend of luxury and urban style.",
    cta: "Discover Luxury"
  }
]

const Hero = () => {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [autoplay, setAutoplay] = useState(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  )
  const navigate = useNavigate()
  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const toggleAutoplay = () => {
    if (autoplay.isPlaying()) {
      autoplay.stop()
    } else {
      autoplay.play()
    }
    setAutoplay(autoplay)
  }

  if (isLoading) {
    return <HeroSkeleton />
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:50px_50px] animate-pulse"></div>
      </div>

      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[autoplay]}
        ref={parallaxRef}
      >
        <CarouselContent>
          {heroImages.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen">
              <Card className="border-none h-full">
                <CardContent className="p-0 h-full">
                  {/* Clickable image area */}
                  <div 
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => navigate('/collection')}
                  >
                    <LazyImage
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl space-y-8">
                          {/* Animated title */}
                          <div className="space-y-4">
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight animate-fade-in-up">
                              {slide.title.split(' ').map((word, i) => (
                                <span key={i} className="inline-block mr-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                  {word}
                                </span>
                              ))}
                            </h1>
                          </div>
                          
                          {/* Subtitle */}
                          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
                            {slide.subtitle}
                          </p>
                          
                          {/* CTA Button */}
                          <div className="animate-fade-in-up animation-delay-400">
                            <Button 
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate('/collection');
                              }} 
                              size="lg" 
                              className="bg-white text-black hover:bg-gray-100 px-10 py-5 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                            >
                              {slide.cta} 
                              <ArrowRight className="ml-3 h-6 w-6" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation controls */}
        <div className="absolute bottom-8 left-8 z-20 flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
            onClick={toggleAutoplay}
          >
            {autoplay.isPlaying() ? (
              <Pause className="h-5 w-5 text-white" />
            ) : (
              <Play className="h-5 w-5 text-white" />
            )}
          </Button>
          
          {/* Slide indicator */}
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white font-medium text-sm">
              {current.toString().padStart(2, '0')} / {heroImages.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300" />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300" />
      </Carousel>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
