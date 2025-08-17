"use client"

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { User, Lock, Save } from 'lucide-react'
import { UpdateProfileForm } from "../components/UpdateProfileForm"
import { ChangePasswordForm } from "../components/ChangePasswordForm"

const profileSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    mobileNumber: Yup.string().matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
    address: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zipCode: Yup.string().matches(/^[0-9]{5}$/, "Zip code must be 5 digits"),
})

export default function Profile() {
    const [activeTab, setActiveTab] = useState("profile")

    const initialValues = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        mobileNumber: "1234567890",
        address: "123 Main St",
        city: "Anytown",
        state: "State",
        zipCode: "12345",
    }

    const formik = useFormik({
        initialValues,
        validationSchema: profileSchema,
        onSubmit: async (values) => {
            console.log(values)
            // Handle profile update logic here
        },
    })

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Your Profile
                    </h1>
                    <p className="text-xl text-gray-600 font-light">
                        Manage your account details and preferences
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="mb-12"
                >
                    <div className="flex justify-center">
                        <div className="bg-gray-100 p-2 rounded-full">
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setActiveTab("profile")}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        activeTab === "profile"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    <User className="w-4 h-4" />
                                    <span>Profile Details</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("password")}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        activeTab === "password"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    <Lock className="w-4 h-4" />
                                    <span>Security</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="bg-gray-50 rounded-3xl p-8 md:p-12"
                >
                    {activeTab === "profile" ? (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Personal Information</h2>
                            
                            <form onSubmit={formik.handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            {...formik.getFieldProps("fullName")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                                        />
                                        {formik.touched.fullName && formik.errors.fullName && (
                                            <p className="mt-1 text-sm text-red-500">{formik.errors.fullName}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            {...formik.getFieldProps("email")}
                                            disabled
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl bg-gray-100 text-gray-500 cursor-not-allowed"
                                        />
                                    </div>

                                    {/* Mobile Number */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="tel"
                                            {...formik.getFieldProps("mobileNumber")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                                        />
                                        {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                                            <p className="mt-1 text-sm text-red-500">{formik.errors.mobileNumber}</p>
                                        )}
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            {...formik.getFieldProps("address")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                                        />
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            {...formik.getFieldProps("city")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                                        />
                                    </div>

                                    {/* State */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            {...formik.getFieldProps("state")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                                        />
                                    </div>

                                    {/* ZIP Code */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ZIP Code
                                        </label>
                                        <input
                                            type="text"
                                            {...formik.getFieldProps("zipCode")}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                                        />
                                        {formik.touched.zipCode && formik.errors.zipCode && (
                                            <p className="mt-1 text-sm text-red-500">{formik.errors.zipCode}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Save Button */}
                                <div className="flex justify-end pt-6">
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2"
                                    >
                                        <Save className="w-4 h-4" />
                                        <span>Save Changes</span>
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <ChangePasswordForm />
                    )}
                </motion.div>
            </div>
        </div>
    )
}
