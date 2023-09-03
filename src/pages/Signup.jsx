import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../features/auth/components/SignupForm';

export default function Signup() {
    return (
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign Up to your account
                </h2>
              </div>
      
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {/* from */}
                <SignupForm />
      
                <p className="mt-10 text-center text-gray-900 text-base">
                    or continue with
                  <br />
                  {/* link */}
                  <button className=
              "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2"><i/>Google
              </button>
              <button className=
              "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2"><i/>
              Facebook
              </button>
            </p>
            <p className="mt-5 text-center text-sm text-gray-900 text-lg">
                Already have an Account?{' '}
              {/* link */}
              <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Log In</Link>
            </p>
              </div>
            </div>
        </>
      )
}
