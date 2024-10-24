import { Outlet } from "react-router-dom";

import { ContextProvider } from "./utils/ContextProvider";
import { UserContextProvider } from "./utils/UserContextProvider";
import { Header } from "./components/Header";
import styles from "./styles/App.module.scss";
import { ProductsJsonContextProvider } from "./utils/ProductsJsonContext";

export const App = () =>{
  return (
    <ProductsJsonContextProvider>
    <ContextProvider>
      <UserContextProvider>
    <div className={styles.app}>
      <h1>Hello Shop</h1>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
    </UserContextProvider>
    </ContextProvider>
    </ProductsJsonContextProvider> 
  );
};


