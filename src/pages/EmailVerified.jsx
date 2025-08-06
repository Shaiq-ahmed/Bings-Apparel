"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {Link, useSearchParams} from "react-router-dom"
import { CheckCircle, XCircle, Loader } from 'lucide-react'
import LoginPlaceHolder from "../assets/assets/frontend_assets/LoginPlaceholder.png"

export default function EmailVerified() {
  const [verificationStatus, setVerificationStatus] = useState("pending") // 'pending', 'success', 'error'
  const [searchParams, setSearchParams] = useSearchParams()
  const token = searchParams.get("token") || "927491hjdb189ey81sajkdmIWUDN"

  useEffect(() => {
    if (token) {
      verifyToken()
    }
  }, [token])

  const verifyToken = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // For demonstration, we'll randomly set success or error
    setVerificationStatus(Math.random() > 0.5 ? "success" : "error")
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <img
        src={LoginPlaceHolder}
        alt="Verify Email background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 sm:opacity-30"
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md p-8 shadow-xl rounded-lg w-full text-center"
          >
            {verificationStatus === "pending" && (
              <div className="space-y-4">
                <Loader className="w-16 h-16 text-black animate-spin mx-auto" />
                <h2 className="text-2xl font-bold text-gray-900">Verifying your email...</h2>
                <p className="text-gray-600">Please wait while we confirm your email address.</p>
              </div>
            )}

            {verificationStatus === "success" && (
              <div className="space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h2 className="text-2xl font-bold text-gray-900">Email Verified</h2>
                <p className="text-gray-600">Your email has been successfully verified.</p>
                <Link to="/login">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Sign In
                  </motion.a>
                </Link>
              </div>
            )}

            {verificationStatus === "error" && (
              <div className="space-y-4">
                <XCircle className="w-16 h-16 text-red-500 mx-auto" />
                <h2 className="text-2xl font-bold text-gray-900">Verification Failed</h2>
                <p className="text-gray-600">Sorry, your verification token has expired or is invalid.</p>
                <Link to="/login">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Back to Login
                  </motion.a>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

