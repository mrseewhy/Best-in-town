import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductInCart from "../components/ProductInCart";

import { useContext } from "react";
import { AppContext, AppContextProvider } from "../Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("SomeComponent must be used within an AppContextProvider");
  }
  const { cartItems, totalPrice } = context;
  return (
    <div>
      <Header />
      <div className="min-h-[70vh] flex flex-col items-center justify-center w-full my-12">
        <h2 className="font-bold text-xl">
          Total Cart Amount: ${totalPrice.toFixed(2)}
        </h2>
        <div className="grid grid-cols-1 gap-8 w-2xl mx-auto my-12">
          {cartItems &&
            cartItems.map((plant) => (
              <div key={plant.id}>
                <ProductInCart
                  name={plant.name}
                  image={plant.image}
                  price={plant.price}
                  description={plant.description}
                  plant={plant}
                />
              </div>
            ))}
        </div>
        <div className="flex  items-center justify-center mb-8 mt-2">
          <Link to="/product-listings">
            <button className="cursor-pointer text-sm flex items-center justify-center h-10 w-42 bg-green-600 text-white border border-green-200 shadow-2xl hover:bg-green-500 duration-200">
              Continue Shopping
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center mb-8 mt-2">
          <Link to="/">
            <button className="text-sm flex items-center justify-center h-10 w-42 bg-green-600 text-white border border-green-200 shadow-2xl hover:bg-green-500 duration-200">
              Check Out
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
