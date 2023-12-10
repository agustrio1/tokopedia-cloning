'use client'
import React, {useState, useEffect} from 'react'

type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    src : string;
  }

  type ApiResponse = {
    status: number;
    message: string;
    data: Product[];
  }  

type Props = {}

const Card = (props: Props) => {
    const [data, setData] = useState<Product[]>([])

    useEffect(() => {
       const fetchData = async () => {
           try {
            const response = await fetch('/api/products/')
                if(response.ok) {
                    const result: ApiResponse = await response.json()
                    console.log(result.data);
                    setData(result.data)   
                } else {
                    console.error('Error fetching data:', response.status, response.statusText)
                }
           } catch (err) {
            console.error('Error fetching data:', err)
           }
       }

       fetchData()
    }, [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-md p-10 mx-auto">
  {data.map((item) => (
    <div key={item.id} className="bg-white p-4 shadow-md rounded-md">
     <img src={item.image} alt={item.name} className="w-40 h-40 object-cover mb-4" />
     <p className="text-lg font-bold mb-2">{item.name}</p>
     <p className="text-gray-500 mb-2">{item.category}</p>
     <p className="text-green-600 font-bold mb-2">Rp{item.price.toFixed(2)}</p>
     <p className="text-gray-700">{item.description}</p>
   </div>
    ))}
  </div>
  )
}

export default Card