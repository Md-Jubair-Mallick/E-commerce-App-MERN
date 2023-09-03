import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { checkUserAsync } from '../AuthSlice';
import { Navigate } from 'react-router-dom';

export default function LogInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loggedInUser, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <>
    {/* {error && <h1>{error.message}</h1>} */}
    {loggedInUser && <Navigate to={'/'} replace={true} />}
    <form noValidate className="space-y-6" onSubmit={handleSubmit((data) => {
        dispatch(checkUserAsync({ email : data.email, password : data.password }))
        }
    )}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              {...register("email", { required : true,pattern:{
                value : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message : 'email not valid'
              } 
            })}
              //use ...register instead of name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {error && <span>{error}</span>}
          </div>
        </div>

        <div>
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
                </label>
                <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </a>
                </div>
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
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Login
            </button>
        </div>
      </form>
    </>
  )
}