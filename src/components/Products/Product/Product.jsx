import React, { useReducer } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const reducer=(state,{type,payload})=>{
  switch(type)
  {
    case "ADD":return [...state,{"name":payload.name,"id":payload.id,"count":1}];
    case "DELETE":return{}
    default:return state;
  }
}


const Product = ({id,name,description}) => {
  // Note: this id should come from api
  const product = { id: id };
  const list = useContext(CartContext)
  console.log(list)
  const setlist = useContext(CartContext)
  const [state, dispatch] = useReducer(reducer,list)

  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>dispatch({type:"ADD",payload:{"name":name,"id":id}})}>Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>dispatch({type:"INC",payload:{"id":id}})}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>dispatch({type:"DEC",payload:{"id":id}})}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>dispatch({type:"REMOVE",payload:{"id":id}})}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
