import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext, AppContextProvider } from "../Context";

const Header = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("SomeComponent must be used within an AppContextProvider");
  }
  const { totalQuantity } = context;
  return (
    <div>
      <div className="bg-green-600 w-full min-h-20 md:h-20 relative">
        <div className="container mx-auto h-full text-white flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-16 md:gap-0">
          <Link to={"/"} className="cursor-pointer">
            <div className="flex flex-row items-center gap-4 ">
              <div className="w-10 h-10 rounded-full">
                <img src="images/logo.jpg" className="rounded-full" />
              </div>
              <div>
                <p className="text-lg font-bold">Best-In-Town Greenery</p>

                <p className="text-sm">Where Green Meeting Serenity</p>
              </div>
            </div>
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/product-listings">
              <h1 className="text-3xl font-bold">Plants</h1>
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <div className="flex">
                <div>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div className="bg-white h-6 w-6 rounded-full -translate-2 flex items-center justify-center shadow-lg">
                  <p className="text-green-600 font-bold text-sm">
                    {totalQuantity}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
