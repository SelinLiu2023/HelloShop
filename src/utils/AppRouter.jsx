import { createBrowserRouter } from "react-router-dom";
import { ProductsDisplayPage } from "../pages/productDisplayPage";
import { App } from "../App";
import { HomePage } from "../pages/HomePage";
import { SingleProductPage } from "../pages/SingleProductPage";
import { AboutPage } from "../pages/AboutPage";
import { ProductsPage } from "../pages/ProductsPage";
import { UserPage } from "../pages/UserPage";
import { CartPage } from "../pages/CartPage";

export const AppRouter = createBrowserRouter([
        {
            element: <App />,
            path: "/",
            children: [
                {
                    element: <HomePage />,
                    path: "",
                },
                {
                    element: <ProductsDisplayPage />,
                    path: ":category",
                },
                {
                    element: <AboutPage />,
                    path: "about",
                },
                {
                    element: <ProductsPage />,
                    path: "products",
                },
                {
                    element:<CartPage />,
                    path:"cart"
                },
                {
                    element: <UserPage />,
                    path: "user",
                },
                {
                    element:<SingleProductPage />,
                    path:"/products/:id"
                }

            ]
        }
    ]);


