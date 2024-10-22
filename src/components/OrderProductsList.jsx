import {  ProductInCartCard } from "./ProductInCartCard";
export const OrderProductsList = ({productsInOrder})=>{
    return(
        <div>
        {    
            productsInOrder.map(item=>{
                return (
                    <div>
                        <div>
                            <ProductInCartCard productId={item.id} isInOrder={true}/>
            
                        </div>
        
                    </div>
                );
            })
        }
        </div>
    );
};