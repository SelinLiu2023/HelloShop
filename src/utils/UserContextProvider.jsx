import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
    // account: "",
    user: null,
    productsInCart: [],
    productsInOrder: [],
    totalPriceToPay: 0,
    ordersList: [],
    isCartIconFixed: false,
    isLogedin: false,
    isLoginModalOpen: false,
};

function addProductToCart(products, productToAdd) {
    const existingProduct = products.find(product => product.id === productToAdd.id);
    if (existingProduct) {
        console.log("products", products);

        console.log("exist");
        // 如果产品已存在于购物车中，增加数量
        return products.map(product =>
            product.id === productToAdd.id ? { ...product, quantity: product.quantity + 1 } : product
        );
    } else {
        console.log("products", products);
        console.log("new");
        // 如果产品不在购物车中，添加新产品
        return [...products, { ...productToAdd, quantity: 1 }];
    }
}
function removeProductFromCart(products, productToremove) {
    const existingProduct = products.find(product => product.id === productToremove.id);
    console.log("productToremove, " , productToremove);
    if (existingProduct && existingProduct.quantity > 1) {
        // 如果产品已存在于购物车中，减少数量
        return products.map(product =>
            product.id === productToremove.id ? { ...product, quantity: product.quantity - 1 } : product
        );
    } else if(existingProduct && existingProduct.quantity === 1){
        return products.filter(product =>
            product.id !== productToremove.id );
    } else {
        // 如果产品不在购物车
        return products;
    }
}
function reducer(state, action) {
    switch (action.type) {
        case 'SET_ACCOUNT':
            return {
                ...state,
                user: {...action.payload},
                isLogedin: true //用户
            };
        case 'REMOVE_ACCOUNT':
            return {
                ...state,
                user: null,
                isLogedin: false //用户
            };
 
        case 'TOGGLE_INFO_MODAL':
            return {
                ...state,
                isLoginModalOpen: !state.isLoginModalOpen //用户
            };
        case 'ADD_PRODUCT_IN_CART':
            // console.log('ADD_PRODUCT_IN_CART');
            return {
                ...state,
                productsInCart: addProductToCart(state.productsInCart, action.payload) //产品对象（id, quantity）
            };
        case 'REMOVE_PRODUCT_FROM_CART':
            console.log('REMOVE_PRODUCT_FROM_CART')
            return {
                ...state,
                productsInCart: removeProductFromCart(state.productsInCart, action.payload)//产品对象（id, quantity）
            };
        case 'SELECT_PRODUCT_TO_ORDER':
            // const productSelected = state.productsInCart.find((item)=>item.id === action.payload);
            console.log("selected :", action.payload) ; 
            return {
                ...state,
                productsInCart: state.productsInCart.map(product =>
                    product.id === action.payload ?{ ...product, selected: true} :
                    product)
            };
            case 'UNSELECT_PRODUCT_FROM_ORDER':
                console.log("unselected :", action.payload) ;
            return {
                ...state,
                productsInCart: state.productsInCart.map(product =>
                    product.id === action.payload ?{ ...product, selected: false} :
                    product)
            };
            case 'CLEAR_ORDER':

            return {
                ...state,
                productsInCart: products.map(product =>({ ...product, selected: false} ))
            };
            case 'SET_CARTICON_FIXED':
                return {
                    ...state,
                    isCartIconFixed: true
                };
            case 'SET_CARTICON_NOT_FIXED':
                return {
                    ...state,
                    isCartIconFixed: false
                };
      
        default:
            return state;
    }
}

export const UserContextProvider = ({ children }) => {
    const [userInfo, userInfoDispatch] = useReducer(reducer, initialState);
    const getProductInCartById = (productId)=>{
        return userInfo.productsInCart.find(item => item.id === productId);
    }
    return (
        <UserContext.Provider value={{ userInfo, userInfoDispatch , getProductInCartById}}>
            {children}
        </UserContext.Provider>
    );
};