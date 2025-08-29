// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// const CursorFollower = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isHovering, setIsHovering] = useState(false)

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     const handleMouseEnter = (e) => {
//       if (e.target.matches('button, a, [data-cursor-hover]')) {
//         setIsHovering(true)
//       }
//     }

//     const handleMouseLeave = (e) => {
//       if (e.target.matches('button, a, [data-cursor-hover]')) {
//         setIsHovering(false)
//       }
//     }

//     window.addEventListener('mousemove', updateMousePosition)
//     document.addEventListener('mouseenter', handleMouseEnter, true)
//     document.addEventListener('mouseleave', handleMouseLeave, true)

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition)
//       document.removeEventListener('mouseenter', handleMouseEnter, true)
//       document.removeEventListener('mouseleave', handleMouseLeave, true)
//     }
//   }, [])

//   return (
//     <>
//       {/* Main cursor */}
//       <motion.div
//         className="fixed top-0 left-0 w-6 h-6 bg-black/20 rounded-full pointer-events-none z-50 mix-blend-difference"
//         animate={{
//           x: mousePosition.x - 12,
//           y: mousePosition.y - 12,
//           scale: isHovering ? 1.5 : 1
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 28,
//           mass: 0.5
//         }}
//       />
      
//       {/* Trailing cursor */}
//       <motion.div
//         className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-50"
//         animate={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//           scale: isHovering ? 0 : 1
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 150,
//           damping: 15,
//           mass: 0.1
//         }}
//       />
//     </>
//   )
// }

// // export default CursorFollower
