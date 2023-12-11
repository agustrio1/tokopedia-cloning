"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";



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

const CardDetail: React.FC = () => {
const {searchParams} = useParams();
  const id = searchParams?.id;
  const [productId, setPoductId] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (response.ok) {
          const result: ApiResponse = await response.json();
          if (result.data && result.data.length > 0) {
            setPoductId(result.data[0]);
          }
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

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!productId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-md p-6 mx-auto">
      <div className="bg-white p-4 shadow-lg rounded-md">
        <img
          src={productId.image}
          alt={productId.name}
          className="w-60 h-60 object-cover mb-4 mx-auto"
        />
        <p className="text-xl font-bold mb-2">{productId.name}</p>
        <p className="text-gray-500 mb-2">{productId.category}</p>
        <p className="text-black font-bold mb-2 text-lg">
          Rp. {new Intl.NumberFormat("id-ID").format(productId.price)}
        </p>
        <p className="text-gray-700 mb-4">{productId.description}</p>
      </div>
    </div>
  );
};

export default CardDetail;
