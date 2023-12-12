import { getData } from "@/app/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(`http://localhost:3000/api/products/details/?id=${params.id}`);


  return (
    <div className="max-w-screen-md p-6 mx-auto mt-16">
      {product && (
        <div className="bg-white p-4 shadow-lg rounded-md">
          <img
            src={product.image || ''}
            alt={product.name || ''}
            className="w-60 h-60 object-cover mb-4 mx-auto"
          />
          <p className="text-xl font-bold mb-2">{product.name}</p>
          <p className="text-gray-500 mb-2">{product.category}</p>
          <p className="text-black font-bold mb-2 text-lg">
            Rp. {new Intl.NumberFormat("id-ID").format(product.price)}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
        </div>
      )}
    </div>
  );
  
}
