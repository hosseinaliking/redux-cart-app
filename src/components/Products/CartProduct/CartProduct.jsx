import React from "react";

//* Redux *//
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../store/Basket-Slice";

//* Styles UI components *//
import FlexAround from "../../../UI/FlexAround";

//* Styles *//
import cssClass from "./CartProduct.module.css";

const CartProduct = ({ data }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.basket.items);

  const addHandler = () => {
    dispatch(
      addItem({
        id: data.id,
        title: data.title,
        description: data.description,
        price: data.price,
      })
    );
  };

  return (
    <div className={cssClass.cart}>
      <FlexAround>
        <h3> {data.title} </h3>
        <span className={cssClass.cartPrice}>{data.price} $</span>
      </FlexAround>

      <FlexAround className={cssClass.descriptionContainer}>
        <p className={cssClass.description}>{data.description}</p>
        <button className={cssClass.addButton} onClick={addHandler} >add to cart</button>
      </FlexAround>
    </div>
  );
};

export default CartProduct;
