'use client'
import React from 'react'
import Link from 'next/link'
import { IoArrowBack } from "react-icons/io5"

type Props = {}

const Register = (props: Props) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 flex flex-col'>
      <div className='bg-white rounded-md p-4 w-full cursor-pointer flex items-center justify-between border-b border-gray-300'>
        <Link href={'/'} className='flex items-center flex-row'>
          <IoArrowBack size={24} className="top-0 left-0 z-10" />
          <p className='ml-2 text-md font-bold'>Daftar</p>
        </Link>
        <Link href={'/login'} className='flex flex-row items-end text-green-500'>Masuk</Link>
      </div>
      <form className="left-0 right-0 mx-auto mt-4">
        <div className="mb-6">
          <label
            htmlFor="nomorHpEmail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nomor HP atau Email
          </label>
          <input
            id="nomorHpEmail"
            type="text"
            name="nomorHpEmail"
            className=" border-b w-full md:w-full left-0 right-0 border-green-300 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline-gray"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Daftar
        </button>
      </form>
    </div>
  )
}

export default Register
