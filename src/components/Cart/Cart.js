import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  const chooseOne = () => {
    if (cart.length > 0) {
      let random = Math.round(Math.random(cart) * (cart.length - 1));
      let randomName = cart[random].name;
      alert("We choose: " + randomName);
    } else {
      alert("Please choose some items");
    }
  };

  // if (item) {
  //     const randomNum =
  //     //   const name = item[randomNum].name;
  //     console.log(randomNum);
  //     // } else {
  //     //   console.log("please choose one item");
  //     // }
  //   };

  return (
    <div className="cart">
      <h2>SELECTED ITEMS</h2>
      <div className="item-box">
        {cart.map((cartItem) => (
          <div className="items">
            <div>
              <img className="item-image" src={cartItem.image} alt="" />
            </div>
            <p>{cartItem.name}</p>
            <button className="item-button">
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </div>
        ))}
      </div>
      <button className="choose-again-btn">Choose Again</button>
      <button onClick={() => chooseOne(cart)} className="choose-one-btn">
        Choose 1 for Me
      </button>
    </div>
  );
};

export default Cart;
