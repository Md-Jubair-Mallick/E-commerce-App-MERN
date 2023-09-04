import React from 'react'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Cart from '../../cart/Cart'
import UserInfoFrom from '../../user/components/UserInfoFrom'

export default function Checkout() {
    let x = false;
  return (
    <>
    <div >
        <form className='mx-10 my-4 px-10 py-4'>
        <div className="space-y-12">
            
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Your Info</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 sm:grid-cols-3 border-2 p-4">
                
                <div>
                    {/* <br /> */}
                    <p>Name:jjj</p>
                    <p>Phone:jdjdjd</p>
                    <p>Email:kdjkffjlf@jflf</p>
                    <p>lain#9</p>
                    <p>Block#I</p>
                    <p>Street#1</p> 
                    <p>State#Hallishahar Housing State</p>
                    <p>City#Chittagong</p>
                    <p>Country#Bangladesh</p>
                </div>
                </div>
                <div className="mt-10 flex items-center justify-end gap-x-6">
                <button
                type="button"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Add New Address
                </button>
            </div>
            </div>
        </div>

            {x && <UserInfoFrom />}

            <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Methods</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
                Pick what payment method you want to use
            </p>

            <div className="mt-10 space-y-10">
                <fieldset>
                {/* <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend> */}
                <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="Card"
                        name="payments"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="Card" className="font-medium text-gray-900">
                        Card
                        </label>
                        <p className="text-gray-500">cradit-card or visa-card or master-card</p>
                    </div>
                    </div>
                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="cash"
                        name="payments"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="cash" className="font-medium text-gray-900">
                        Cash
                        </label>
                        <p className="text-gray-500">Cash on dalivery</p>
                    </div>
                    </div>
                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="others"
                        name="payments"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="others" className="font-medium text-gray-900">
                        Others
                        </label>
                        <p className="text-gray-500">Bkash or Nagad</p>
                    </div>
                    </div>
                </div>
                </fieldset>
            </div>
            </div>
            
        </form>

        <Cart link={'/payment'} buttonValue={'Place order'} />
    </div>
    </>
  )
}
