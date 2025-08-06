import { motion } from "framer-motion"
import { User, Phone, MapPin, Mail } from 'lucide-react'

export function UpdateProfileForm({ formik }) {
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            <User className="inline-block mr-2" size={18} />
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            {...formik.getFieldProps("fullName")}
            className={`mt-1 block w-full rounded-md border ${
              formik.touched.fullName && formik.errors.fullName
                ? "border-red-500"
                : "border-gray-300"
            } px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50`}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {formik.errors.fullName}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            <Mail className="inline-block mr-2" size={18} />
            Email (Non-editable)
          </label>
          <input
            id="email"
            type="email"
            value={formik.values.email}
            disabled
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm bg-gray-100 text-gray-500"
          />
        </div>

        <div>
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
            <Phone className="inline-block mr-2" size={18} />
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            type="tel"
            {...formik.getFieldProps("mobileNumber")}
            className={`mt-1 block w-full rounded-md border ${
              formik.touched.mobileNumber && formik.errors.mobileNumber
                ? "border-red-500"
                : "border-gray-300"
            } px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50`}
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {formik.errors.mobileNumber}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            <MapPin className="inline-block mr-2" size={18} />
            Address
          </label>
          <input
            id="address"
            type="text"
            {...formik.getFieldProps("address")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            id="city"
            type="text"
            {...formik.getFieldProps("city")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50"
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            id="state"
            type="text"
            {...formik.getFieldProps("state")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50"
          />
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
            Zip Code
          </label>
          <input
            id="zipCode"
            type="text"
            {...formik.getFieldProps("zipCode")}
            className={`mt-1 block w-full rounded-md border ${
              formik.touched.zipCode && formik.errors.zipCode
                ? "border-red-500"
                : "border-gray-300"
            } px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50`}
          />
          {formik.touched.zipCode && formik.errors.zipCode && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {formik.errors.zipCode}
            </motion.p>
          )}
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="flex justify-end"
      >
        <button
          type="submit"
          className="rounded-md bg-black py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors duration-200"
        >
          Update Profile
        </button>
      </motion.div>
    </form>
  )
}

