"use client"

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from 'lucide-react'

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
})

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(values)
      setIsLoading(false)
    },
  })

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
              Welcome back
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-light">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="space-y-5">
              {/* Email */}
              <div>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  placeholder="Email"
                  className={`w-full px-4 py-4 text-lg border-0 border-b-2 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-200 focus:border-gray-900"
                  } bg-transparent focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-gray-400`}
                />
                {formik.touched.email && formik.errors.email && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 text-sm text-red-500"
                  >
                    {formik.errors.email}
                  </motion.p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...formik.getFieldProps("password")}
                  placeholder="Password"
                  className={`w-full px-4 py-4 pr-12 text-lg border-0 border-b-2 ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "border-gray-200 focus:border-gray-900"
                  } bg-transparent focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-gray-400`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {formik.touched.password && formik.errors.password && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 text-sm text-red-500"
                  >
                    {formik.errors.password}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  {...formik.getFieldProps("rememberMe")}
                  className="sr-only"
                />
                <div className={`w-5 h-5 border-2 border-gray-300 rounded transition-colors duration-200 flex items-center justify-center ${
                  formik.values.rememberMe ? 'bg-gray-900 border-gray-900' : 'bg-white'
                }`}>
                  {formik.values.rememberMe && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="ml-3 text-gray-700 font-medium">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-black text-white py-4 px-6 text-lg font-medium rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-none hover:shadow-lg"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </motion.button>

            {/* Sign up link */}
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Create account
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
