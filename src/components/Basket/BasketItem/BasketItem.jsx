import React from "react";

//* Reduc *//
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../store/Basket-Slice";

//* Styles UI components *//
import FlexAround from "../../../UI/FlexAround";

//* Styles *//
import cssClass from "./BasketItem.module.css";

const BasketItem = ({ data }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(
      addItem({
        id: data.id,
        title: data.title,
        description: data.description,
        price: data.price,
      })
    );
  };

  const removeHandler = () => {
    dispatch(removeItem({id: data.id}));
  };

  return (
    <div className={cssClass.itemContainer}>
      <FlexAround>
        <p> {data.title} </p>
        <p>
          {data.totalPrice}$ <span>({data.price}$ per item)</span>{" "}
        </p>
      </FlexAround>

      <FlexAround>
        <p>
          x <span>{data.amount}</span>
        </p>

        <div className={cssClass.buttonContainer}>
          <button className={cssClass.basketButton} onClick={clickHandler}>
            +
          </button>
          <button className={cssClass.basketButton} onClick={removeHandler}>
            -
          </button>
        </div>
      </FlexAround>
    </div>
  );
};

export default BasketItem;
