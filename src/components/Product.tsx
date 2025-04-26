import { useContext } from "react";
import { AppContext } from "../Context";
interface ProductProps {
  name: string;
  image: string;
  price: number;
  description: string;
  plant: any; // You can replace `any` with a more specific type if you know what 'plant' should be
}
const Product: React.FC<ProductProps> = ({
  name,
  image,
  price,
  description,
  plant,
}) => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("SomeComponent must be used within an AppContextProvider");
  }
  const { addToCart } = context;
  return (
    <div className="container mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-end">
          <p className="bg-red-500 h-6 w-16 flex items-center justify-center text-white rounded-tr-xl rounded-bl-xl">
            {" "}
            SALE
          </p>
        </div>
        <div className="flex items-center justify-center mb-4">
          <p className="text-center font-bold text-2xl">{name}</p>
        </div>
        <div className="flex items-center justify-center h-56 mb-2">
          <img src={image} className="object-cover h-full " />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-center text-red-500 text-lg">${price}</p>
        </div>
        <div className="flex items-center justify-center py-2 px-12">
          <p className="text-center  text-base italic">{description}</p>
        </div>
        <div className="flex items-center justify-center mb-8 mt-2">
          {plant.addedToCart === false ? (
            <button
              onClick={() => addToCart(plant)}
              className="text-sm flex items-center justify-center h-10 w-28 bg-green-600 text-white border border-green-200 shadow-2xl hover:bg-green-500 duration-200"
            >
              Add to Cart
            </button>
          ) : (
            <button className="text-sm flex items-center justify-center h-10 w-28 bg-gray-600 text-white border border-gray-200 shadow-2xl hover:bg-gray-500 duration-200">
              Added to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
