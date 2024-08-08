import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import { CartProvider } from "./context/cart-context";

export const App = () => {
  return (
    <>
    <CartProvider>
      <RouterProvider router={route} />
      </CartProvider>
    </>
  );
};
