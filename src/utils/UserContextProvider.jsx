import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
    account: "",
    productsInCart: [],
    productsInOrder: [],
    totalPriceToPay: 0,
    ordersList: [],
    isCartIconFixed: true,
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
                account: action.payload //用户名
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
        case 'ADD_PRODUCT_IN_ORDER':
            const productExists = state.productsInOrder.some(productid => productid === action.payload);
            if (!productExists) {
                // 产品不存在，添加到数组
                return {
                    ...state,
                    productsInOrder: [...state.productsInOrder, action.payload]  //产品 id
                };
            } else {
                // 产品已存在，不做任何修改
                return state;
            }
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