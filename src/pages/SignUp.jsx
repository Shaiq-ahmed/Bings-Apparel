"use client"

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from 'lucide-react'

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
})

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
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
              Create account
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-light">
              Join us and start your journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <input
                  id="name"
                  type="text"
                  {...formik.getFieldProps("name")}
                  placeholder="Full name"
                  className={`w-full px-4 py-4 text-lg border-0 border-b-2 ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-gray-200 focus:border-gray-900"
                  } bg-transparent focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-gray-400`}
                />
                {formik.touched.name && formik.errors.name && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 text-sm text-red-500"
                  >
                    {formik.errors.name}
                  </motion.p>
                )}
              </div>

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

              {/* Confirm Password */}
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  {...formik.getFieldProps("confirmPassword")}
                  placeholder="Confirm password"
                  className={`w-full px-4 py-4 pr-12 text-lg border-0 border-b-2 ${
                    formik.touched.confirmPassword && formik.errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-200 focus:border-gray-900"
                  } bg-transparent focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-gray-400`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 text-sm text-red-500"
                  >
                    {formik.errors.confirmPassword}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-black text-white py-4 px-6 text-lg font-medium rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-none hover:shadow-lg"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </motion.button>

            {/* Sign in link */}
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
