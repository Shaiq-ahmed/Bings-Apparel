import React from 'react'
import { motion, animate } from 'framer-motion'

// Magnetic button component
export const MagneticButton = ({ children, className = "", strength = 0.3, ...props }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Hover lift effect
export const HoverLift = ({ children, className = "", liftHeight = -8 }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: liftHeight,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

// Floating animation
export const FloatingElement = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  )
}

// Shake animation for errors
export const ShakeAnimation = ({ children, className = "", isShaking = false }) => {
  return (
    <motion.div
      className={className}
      animate={isShaking ? { x: [-5, 5, -5, 5, 0] } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

// Pulse glow effect
export const PulseGlow = ({ children, className = "", glowColor = "blue" }) => {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          `0 0 20px rgba(59, 130, 246, 0.3)`,
          `0 0 40px rgba(59, 130, 246, 0.6)`,
          `0 0 20px rgba(59, 130, 246, 0.3)`
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Typing text animation
export const TypingText = ({ text, className = "", delay = 0 }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.05,
            duration: 0.3
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Count up animation
export const CountUp = ({ to, duration = 2, className = "" }) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const controls = animate(0, to, {
      duration,
      onUpdate: (value) => setCount(Math.floor(value))
    })
    return controls.stop
  }, [to, duration])

  return <span className={className}>{count}</span>
}

// Ripple effect
export const RippleEffect = ({ children, className = "" }) => {
  const [ripples, setRipples] = React.useState([])

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    }

    setRipples(prev => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 1000)
  }

  return (
    <div className={`relative overflow-hidden ${className}`} onClick={createRipple}>
      {children}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute bg-white opacity-30 rounded-full pointer-events-none"
          initial={{
            width: 0,
            height: 0,
            x: ripple.x,
            y: ripple.y,
            opacity: 0.6
          }}
          animate={{
            width: ripple.size,
            height: ripple.size,
            opacity: 0
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}

export default {
  MagneticButton,
  HoverLift,
  FloatingElement,
  ShakeAnimation,
  PulseGlow,
  TypingText,
  CountUp,
  RippleEffect
}
