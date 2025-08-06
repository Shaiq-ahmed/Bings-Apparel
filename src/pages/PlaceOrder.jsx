import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Title from '../components/Text';
import CartTotals from '../pages/CartTotals';
import { assets } from '../assets/assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      phone: '',
      paymentMethod: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      zipcode: Yup.string().matches(/^\d+$/, 'Zipcode must be numeric').required('Zipcode is required'),
      country: Yup.string().required('Country is required'),
      phone: Yup.string()
        .matches(/^(?:\+?\d{1,3})?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Phone number is invalid')
        .required('Phone is required'),
      paymentMethod: Yup.string().required('Payment method is required'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted successfully:', values);
      navigate('/orders')
    },
  });

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <form className="grid gap-4" onSubmit={formik.handleSubmit}>
          <Title text1={'Shipping'} text2={'Address'} />
          {/* First and Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                className={`w-full border p-2 rounded-sm ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                type="text"
                name="firstName"
                placeholder="First Name"
                {...formik.getFieldProps('firstName')}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
              )}
            </div>
            <div className="w-full">
              <input
                className={`w-full border p-2 rounded-sm ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                type="text"
                name="lastName"
                placeholder="Last Name"
                {...formik.getFieldProps('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
              )}
            </div>
          </div>
          {/* Remaining fields */}
          <input
            className={`w-full border p-2 rounded-sm ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            type="email"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
          {/* Address */}
          <input
            className={`w-full border p-2 rounded-sm ${formik.touched.address && formik.errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
            type="text"
            name="address"
            placeholder="Address"
            {...formik.getFieldProps('address')}
          />
          {formik.touched.address && formik.errors.address && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
          )}

          {/* City */}
          <input
            className={`w-full border p-2 rounded-sm ${formik.touched.city && formik.errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
            type="text"
            name="city"
            placeholder="City"
            {...formik.getFieldProps('city')}
          />
          {formik.touched.city && formik.errors.city && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
          )}

          {/* State */}
          <input
            className={`w-full border p-2 rounded-sm ${formik.touched.state && formik.errors.state ? 'border-red-500' : 'border-gray-300'
              }`}
            type="text"
            name="state"
            placeholder="State"
            {...formik.getFieldProps('state')}
          />
          {formik.touched.state && formik.errors.state && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
          )}

          {/* Zipcode */}
          <input
            className={`w-full border p-2 rounded-sm ${formik.touched.zipcode && formik.errors.zipcode ? 'border-red-500' : 'border-gray-300'
              }`}
            type="text"
            name="zipcode"
            placeholder="Zipcode"
            {...formik.getFieldProps('zipcode')}
          />
          {formik.touched.zipcode && formik.errors.zipcode && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.zipcode}</p>
          )}

          {/* Country */}
          <input
            className={`w-full border p-2 rounded-sm ${formik.touched.country && formik.errors.country ? 'border-red-500' : 'border-gray-300'
              }`}
            type="text"
            name="country"
            placeholder="Country"
            {...formik.getFieldProps('country')}
          />
          {formik.touched.country && formik.errors.country && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.country}</p>
          )}

          {/* Phone */}
          <input
            className={`w-full border p-2 rounded-sm ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            type="text"
            name="phone"
            placeholder="Phone"
            {...formik.getFieldProps('phone')}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
          )}

        </form>
      </div>

      {/* Payment Method & Place Order */}
      <div>
        <CartTotals />
        <div className="mt-8">
          <Title text1={'Payment'} text2={'Method'} />
          <div className="flex items-center mt-4 border p-2">
            <input
              type="radio"
              name="paymentMethod"
              id="cod"
              value="Cash on Delivery"
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="cod" className="text-sm">
              Cash on Delivery
            </label>
          </div>
          <div className="flex items-center mt-4 border p-2">
            <input
              type="radio"
              name="paymentMethod"
              id="stripe"
              value="Stripe"
              onChange={formik.handleChange}
              className="mr-2"
            />
            <img src={assets.stripe_logo} alt="Stripe" className="h-6" />
          </div>
          {formik.touched.paymentMethod && formik.errors.paymentMethod && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.paymentMethod}</p>
          )}
        </div>

        {/* Button aligned to the bottom-right */}
        <div className="flex justify-center sm:justify-end mt-8">
          <button
            type="button"
            onClick={formik.handleSubmit}
            className="bg-black w-[60%] text-lg text-white py-2 px-6  hover:bg-gray-800 transition duration-200"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
