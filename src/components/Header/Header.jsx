import React from "react";

//* Redux *//
import { useDispatch, useSelector } from "react-redux";
import { showBasket } from "../../store/UI-Slice";

//* Import UI components *//
import Container from "../../UI/Container";
import FlexAround from "../../UI/FlexAround";

//* Import styles *//
import cssClass from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.basket.items);

  const totalAmount = items.map(item => item.amount).reduce((pre, cur) => pre + cur, 0);

  const clickHandler = () => {
    dispatch(showBasket());
  };

  return (
    <header className={cssClass.header}>
      <Container>
        <FlexAround>
          <h1>Redux Cart</h1>

          <button className={cssClass.cartButton} onClick={clickHandler}>
            <span>My cart</span>
            <span className={cssClass.basketNumber}>{ totalAmount }</span>
          </button>
        </FlexAround>
      </Container>
    </header>
  );
};

export default Header;
