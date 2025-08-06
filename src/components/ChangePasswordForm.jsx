import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { Lock } from 'lucide-react'

const passwordSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("New password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm password is required'),
})

export function ChangePasswordForm() {
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: passwordSchema,
        onSubmit: async (values) => {
            setIsLoading(true)
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))
            console.log(values)
            setIsLoading(false)
            // Handle password change logic here
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                    <Lock className="inline-block mr-2" size={18} />
                    Current Password
                </label>
                <input
                    id="currentPassword"
                    type="password"
                    {...formik.getFieldProps("currentPassword")}
                    className={`mt-1 block w-full rounded-md border ${formik.touched.currentPassword && formik.errors.currentPassword
                        ? "border-red-500"
                        : "border-gray-300"
                        } px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50`}
                />
                {formik.touched.currentPassword && formik.errors.currentPassword && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                    >
                        {formik.errors.currentPassword}
                    </motion.p>
                )}
            </div>

            <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                    <Lock className="inline-block mr-2" size={18} />
                    New Password
                </label>
                <input
                    id="newPassword"
                    type="password"
                    {...formik.getFieldProps("newPassword")}
                    className={`mt-1 block w-full rounded-md border ${formik.touched.newPassword && formik.errors.newPassword
                        ? "border-red-500"
                        : "border-gray-300"
                        } px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50`}
                />
                {formik.touched.newPassword && formik.errors.newPassword && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                    >
                        {formik.errors.newPassword}
                    </motion.p>
                )}
            </div>

            <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    <Lock className="inline-block mr-2" size={18} />
                    Confirm New Password
                </label>
                <input
                    id="confirmPassword"
                    type="password"
                    {...formik.getFieldProps("confirmPassword")}
                    className={`mt-1 block w-full rounded-md border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500" : "border:border-gray-300"
                        } px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50`}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                    >
                        {formik.errors.confirmPassword}
                    </motion.p>
                )}
            </div>

            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex justify-end"
            >
                <button
                    type="submit"
                    disabled={isLoading}
                    className="rounded-md bg-black py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    {isLoading ? "Changing Password..." : "Change Password"}
                </button>
            </motion.div>
        </form>
    )
}

