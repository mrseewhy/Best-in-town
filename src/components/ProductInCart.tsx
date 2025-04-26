import { useContext } from "react";
import { AppContext } from "../Context";
const ProductInCart = ({ name, image, price, description, plant }) => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("SomeComponent must be used within an AppContextProvider");
  }
  const { addQuantity, removeQuantity, removeItem } = context;
  return (
    <div className="w-full mx-auto">
      <div className=" flex  flex-col gap-4 items-center justify-center">
        <div className="bg-white border border-gray-200 rounded-xl flex w-10/12 h-72 gap-4">
          <div className="flex  items-center justify-center w-1/2 ">
            <img src={image} className="object-cover h-full w-full" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-4">
              <p className="text-center font-bold text-2xl">{name}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-red-500 text-lg">${price}</p>
            </div>

            <div className="flex items-center justify-center py-2 px-12 gap-4">
              <p>
                <button
                  onClick={() => addQuantity(plant)}
                  className="bg-blue-600 h-6 w-6 flex items-center justify-center text-white rounded-full"
                >
                  +
                </button>
              </p>
              <p className="text-center font-bold  text-lg italic">
                {plant.quantity}
              </p>
              <p>
                <button
                  onClick={() => removeQuantity(plant)}
                  className="bg-red-600 h-6 w-6 flex items-center justify-center text-white rounded-full"
                >
                  -
                </button>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-red-500 text-lg">
                ${(price * plant.quantity).toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-center mb-8 mt-2">
              <button
                onClick={() => removeItem(plant)}
                className="text-sm flex items-center justify-center h-10 w-28 bg-red-600 text-white border border-red-200 shadow-2xl hover:bg-red-500 duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
