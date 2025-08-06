"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import {Link, useNavigate, useSearchParams} from "react-router-dom"
import LoginPlaceholder from "../assets/assets/frontend_assets/LoginPlaceholder.png"

export default function ResetPasswordMessage() {
    
    const [searchParams, setSearchParams] = useSearchParams(); 
    const email = searchParams.get("email");
    const navigate = useNavigate(); 

    useEffect(() => {
        if (!email) {
            navigate('/forgot-password')
        }
    }, [email])

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">
            <img
                src={LoginPlaceholder}
                alt="Reset Password background"
                className="absolute inset-0 w-full h-full object-cover opacity-50 sm:opacity-30"
            />
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-md p-8 shadow-xl rounded-lg w-full"
                    >
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Reset your password</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700 text-base leading-relaxed">
                                We have sent a password reset link to your email address. Please allow up to 5 minutes for the email to arrive.
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                If there is an account associated with this email, you will receive instructions on how to reset your password.
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                If you are unable to access your account, please contact our support team at{' '}
                                <a href="mailto:support@bingsdrip.com" className="text-black hover:underline">
                                    support@bingsdrip.com
                                </a>.
                            </p>
                        </div>
                        <div className="mt-8 text-center">
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
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

