"use client";
import Link from "next/link";

const navs = [
  {
    icon: "apps",
    text: "Home",
    image: "/assets/home-icons.svg",
  },
  {
    icon: "heart",
    text: "Feed",
    image: "/assets/feed-icons.svg",
  },
  {
    icon: "cart",
    text: "Official Store",
    image: "/assets/offical-icons.svg",
  },
  {
    icon: "wishlist",
    text: "Wishlist",
    image: "/assets/wishlist-icons.svg",
  },
  {
    icon: "transaction",
    text: "Transaksi",
    image: "/assets/transaction-icons.svg",
  },
];

const BottomBar = () => {
  return (
    <footer className="flex flex-row items-start justify-between fixed bottom-0 w-full max-w-lg p-2 ">
      <div className="flex flex-row justify-evenly sm:justify-evenly items-center mr-2 h-10 sm:h-8 space-x-2 sm:space-x-6 lg:space-x-10 w-full md:max-w-screen-md xl:max-w-screen-lg mx-auto">
        {navs.map((item, index) => (
          <Link
            key={index}
            href={item.text.toLowerCase()}
            passHref
            className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.text}
              className="h-6 w-6 object-cover"
            />
            <p className="text-xs sm:text-sm">{item.text}</p>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default BottomBar;
