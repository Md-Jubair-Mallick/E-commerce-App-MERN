// import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { createUserAsync } from '../AuthSlice';

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const { loggedInUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <>
    {/* {loggedInUser?.email} */}
      <form noValidate className="space-y-6" onSubmit={handleSubmit((data) => {
        dispatch(createUserAsync({ email : data.email, password : data.password }))
  })}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              {...register("email", { required : true,pattern:{
                // value : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message : 'email not valid'
              } 
            })}
              //use ...register instead of name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              {...register('password', { required : true,
              pattern: {
                value : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                message : 'password not valid',
              }})}
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="confirmPsword"
              {...register('confirmPsword', { required : 'confirm password is required', 
              validate :(value, formValues) => value === formValues.password || "It is not matched"
              })}
              type="password"
              autoComplete="currentPassword"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.confirmPsword && <span className='text-red-600'>{errors.confirmPsword.message}</span>}
          </div>
        </div>

        
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  )
}
