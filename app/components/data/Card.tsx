"use client";
import React, { useState, useEffect } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  src: string;
};

type ApiResponse = {
  status: number;
  message: string;
  data: Product[];
};

type Props = {};

const Card = (props: Props) => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/");
        if (response.ok) {
          const result: ApiResponse = await response.json();
          console.log(result.data);
          setData(result.data);
        } else {
          console.error(
            "Error fetching data:",
            response.status,
            response.statusText
          );
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 max-w-screen-sm p-4 mx-auto mb-8">
      {data.map((item) => (
        <div key={item.id} className="bg-white p-2 shadow-lg rounded-md">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-40 h-40 object-cover mb-4 items-center mx-auto"
          />
          <p className="text-sm font-bold mb-2 text-center overflow-hidden">
            {item.name.length > 30 ? (
              <span title={item.name}>
                {item.name.substring(0, 17)}...
              </span>
            ) : (
              item.name
            )}
          </p>
          <p className="text-gray-500 mb-2 text-center">{item.category}</p>
          <p className="text-black font-bold mb-2 text-center text-sm">
          Rp. {new Intl.NumberFormat("id-ID").format(item.price)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
