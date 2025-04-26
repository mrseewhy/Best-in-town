import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.tsx";
import ProductListing from "./pages/ProductListing.tsx";
import Cart from "./pages/Cart.tsx";
import { AppContextProvider } from "./Context.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/product-listings", element: <ProductListing /> },
  { path: "/cart", element: <Cart /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
