'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import { IoArrowBack } from "react-icons/io5"
import {useRouter} from 'next/navigation'

type Props = {}

const Register = (props: Props) => {
  const [nomorHpEmail, setNomorHpEmail] = useState<string>('')
  const router = useRouter()
  const isNomorHpEmailValid = (value: string) => {
    return value.length >= 11;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomorHpEmail(event.target.value)
  }

  const handleRegister = () => {
    console.log('Clicked Daftar button');
    if (isNomorHpEmailValid(nomorHpEmail)) {
      router.push('/verification');
    }
  };
  

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 flex flex-col'>
      <div className='bg-white rounded-md p-4 w-full cursor-pointer flex items-center justify-between border-b border-gray-300'>
        <Link href={'/'} className='flex items-center flex-row'>
          <IoArrowBack size={24} className="top-0 left-0 z-10" />
          <p className='ml-2 text-md font-bold'>Daftar</p>
        </Link>
        <Link href={'/login'} className='flex flex-row items-end text-green-500'>Masuk</Link>
      </div>
      <form className="w-full md:w-1/2 mx-auto mt-4">
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
            value={nomorHpEmail}
            onChange={handleInputChange}
            className=" border-b w-full md:w-full left-0 right-0 border-green-300 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline-gray"
          />
        </div>

        <button
          type="submit"
          onClick={handleRegister}
          disabled={!isNomorHpEmailValid(nomorHpEmail)}
          className={`${
            isNomorHpEmailValid(nomorHpEmail)
              ? 'bg-green-500'
              : 'bg-gray-300 cursor-not-allowed'
          } text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue`}
        >
          Daftar
        </button>
      </form>
    </div>
  )
}

export default Register
