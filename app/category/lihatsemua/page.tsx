"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronCompactUp } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import Featured from "../components/Featured";

type Props = {};

const LihatSemua = (props: Props) => {
  const [isFeaturedOpen, setFeaturedOpen] = useState(false);
  const [isElectronicsOpen, setElectronicsOpen] = useState(false);
  const [isFashionOpen, setFashionOpen] = useState(false);
  const [isKebutuhanOpen, setIskebutuhanOpen] = useState(false);
  const [isFoodOpen, setIsFoodOpen] = useState(false);
  const [IsGameOpen, setIsGameOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-10 flex flex-col">
      <div className="bg-white rounded-md p-4 w-full cursor-pointer flex items-center justify-between shadow-md border-b border-gray-300">
        <Link href={"/"} className="flex items-center flex-row">
          <IoArrowBack size={24} className="top-0 left-0 z-10 text-gray-500" />
          <p className="ml-2 text-md font-bold text-gray-700">
            Jelajah Tokopedia
          </p>
        </Link>
      </div>
      <div className="max-w-[600px] mx-auto p-2 mt-4">
        <div
          onClick={() => setFeaturedOpen(!isFeaturedOpen)}
          className="flex flex-row max-w-screen-md items-center justify-between cursor-pointer mb-8">
          <p className="mr-16">Featured</p>
          <BsChevronCompactUp
            className={`transition ease-in duration-150 transform ${
              isFeaturedOpen ? "rotate-180" : "rotate-0"
            } ml-48`}
          />
        </div>
        {isFeaturedOpen && <Featured/>}

        <div
          onClick={() => setElectronicsOpen(!isElectronicsOpen)}
          className="flex flex-row items-center justify-between cursor-pointer mt-4 mb-8">
          <p className="mr-16">Elektronik</p>
          <BsChevronCompactUp
            className={`transition ease-in duration-150 transform ${
              isElectronicsOpen ? "rotate-180" : "rotate-0"
            } ml-48`}
          />
        </div>
        {isElectronicsOpen && (
          <div className="ml-4">Content for Electronics</div>
        )}
        <div
          onClick={() => setFashionOpen(!isFashionOpen)}
          className="flex flex-row items-center justify-between cursor-pointer mt-4 mb-8">
          <p className="mr-16">Fashion</p>
          <BsChevronCompactUp
            className={`transition ease-in duration-150 transform ${
              isFashionOpen ? "rotate-180" : "rotate-0"
            } ml-48`}
          />
        </div>
        {isFashionOpen && (
          <div className="ml-4">Content for Electronics</div>
        )}
        <div
          onClick={() => setIskebutuhanOpen(!isKebutuhanOpen)}
          className="flex flex-row items-center justify-between cursor-pointer mt-4 mb-8">
          <p className="mr-16">Kebutuhan harian</p>
          <BsChevronCompactUp
            className={`transition ease-in duration-150 transform ${
              isKebutuhanOpen ? "rotate-180" : "rotate-0"
            } ml-48`}
          />
        </div>
        {isKebutuhanOpen && (
          <div className="ml-4">Content for Kebutuhan</div>
        )}
        <div
          onClick={() => setIsFoodOpen(!isFoodOpen)}
          className="flex flex-row items-center justify-between cursor-pointer mt-4 mb-8">
          <p className="mr-16">Makanan & Minuman</p>
          <BsChevronCompactUp
            className={`transition ease-in duration-150 transform ${
              isFoodOpen ? "rotate-180" : "rotate-0"
            } ml-48`}
          />
        </div>
        {isFoodOpen && (
          <div className="ml-4">Content for Kebutuhan</div>
        )}
        <div
          onClick={() => setIsGameOpen(!IsGameOpen)}
          className="flex flex-row items-center justify-between cursor-pointer mt-4 mb-8">
          <p className="mr-16">Game & Hobi</p>
          <BsChevronCompactUp
            className={`transition ease-in duration-150 transform ${
              IsGameOpen ? "rotate-180" : "rotate-0"
            } ml-48`}
          />
        </div>
        {IsGameOpen && (
          <div className="ml-4">Content for Kebutuhan</div>
        )}
      </div>
    </div>
  );
};

export default LihatSemua;
