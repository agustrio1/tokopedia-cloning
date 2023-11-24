"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiCart } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const [isNav, setIsNav] = useState<boolean>(false);

  const openNav = () => {
    setIsNav(!isNav);
  };

  const closeNav = () => {
    setIsNav(false);
  };

  return (
    <header className="bg-primary p-4 md:flex md:justify-between md:items-center relative">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3">
        <div className="relative flex-grow md:flex-grow-0 md:w-full">
          <Link href="#">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Cari di Tokopedia"
                className="bg-white rounded-xl pl-4 md:pl-10 pr-4 py-2 w-full md:w-auto text-base border border-gray-300 outline-none focus:border-green-500 transition-all"
              />
              <AiOutlineSearch
                className="absolute left-4 top-3 text-gray-900"
                size={20}
              />
            </div>
          </Link>
        </div>
        <div className="ml-16 flex flex-row space-x-1">
          <Link href="/login">
            <button className="bg-white p-2 rounded-lg cursor-pointer">
              <AiOutlineMail className="text-gray-900" size={24} />
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-white p-2 rounded-lg cursor-pointer">
              <IoIosNotificationsOutline className="text-gray-900" size={24} />
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-white p-2 rounded-lg cursor-pointer">
              <BiCart className="text-gray-900" size={24} />
            </button>
          </Link>
          <span
            onClick={openNav}
            className="p-[9px] bg-gray-100 rounded-md cursor-pointer">
            <RxHamburgerMenu
              className={`transition ease-in duration-150 ${
                isNav ? "rotate-180" : "0"
              }`}
              size={24}
            />
          </span>
        </div>
      </div>

      {isNav && (
        <div className="fixed top-0 left-4 w-full h-full bg-white bg-opacity-80 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-white rounded-md overflow-x-8 flex flex-col items-start">
            <span
              onClick={closeNav}
              className="bg-white rounded-md p-2 cursor-pointer flex items-center">
              <MdClose size={24} className="top-0 left-0 z-10" />
              <p className="ml-2">Menu utama</p>
            </span>
          </div>
          <ul className="fixed mt-16 top-4 w-full h-full flex flex-col text-[15px] opacity-75 px-9">
            <li>
              <a href="/shop" className="py-3 inline-block w-full ">
                Shop
              </a>
            </li>
            <li>
              <a href="/filters" className="py-3 inline-block w-full ">
                Filters
              </a>
            </li>
            <li>
              <a href="/myproducts" className="py-3 inline-block w-full ">
                My Product
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
