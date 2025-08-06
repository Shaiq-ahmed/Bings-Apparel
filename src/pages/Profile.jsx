"use client"

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { User, Lock, ShoppingBag, MapPin, Phone, Mail } from 'lucide-react'
import ProfilePlaceholder from "../assets/assets/frontend_assets/profileData.png"
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
        <div className="min-h-screen  relative overflow-hidden">
            <img
                src={ProfilePlaceholder}
                alt="Profile background"
                className="absolute inset-0 w-full h-full object-cover opacity-50 sm:opacity-30 mix-blend-multiply"
            />
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-md p-8 shadow-xl rounded-lg w-full"
                    >
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Your Profile</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Manage your account details and preferences
                            </p>
                        </div>

                        <div className="mb-8">
                            {/* Segmented control for small screens */}
                            <div className="sm:hidden">
                                <select
                                    value={activeTab}
                                    onChange={(e) => setActiveTab(e.target.value)}
                                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                >
                                    <option value="profile">Profile Details</option>
                                    <option value="password">Change Password</option>
                                </select>
                            </div>

                            <div className="mb-8">
                                <div className="flex flex-col sm:flex-row border-b border-gray-200">
                                    <button
                                        onClick={() => setActiveTab("profile")}
                                        className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "profile"
                                                ? "text-black border-b-2 border-black"
                                                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                            } transition-colors duration-200 focus:outline-none focus:text-black focus:border-black`}
                                    >
                                        <User className="mr-2" size={18} />
                                        <span className="whitespace-nowrap">Profile Details</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("password")}
                                        className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "password"
                                                ? "text-black border-b-2 border-black"
                                                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                            } transition-colors duration-200 focus:outline-none focus:text-black focus:border-black`}
                                    >
                                        <Lock className="mr-2" size={18} />
                                        <span className="whitespace-nowrap">Change Password</span>
                                    </button>
                                </div>
                            </div>
                        </div>


                        {activeTab === "profile" ? (
                            <UpdateProfileForm formik={formik} />
                        ) : (
                            <ChangePasswordForm />
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

