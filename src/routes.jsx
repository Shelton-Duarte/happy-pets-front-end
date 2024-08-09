import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up";
import { ErrorPage } from "./pages/error-page";
import { Contacts } from "./pages/contacts";
import { Products } from "./pages/products";
import { PaymentForm } from "./components/payment/payment";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/payment",
    element: <PaymentForm />,
  },
]);
