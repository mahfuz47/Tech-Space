import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Cart.css";

const Cart = (props) => {
  const { cart, setCart } = props;

  const handleDeleteItem = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const remaining = cart.filter((item) => item.id !== id);
      setCart(remaining);
    }
  };
  const handleDeleteAll = () => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const remaining = cart.filter((item) => item === [0]);
      setCart(remaining);
    }
  };
  const chooseOne = () => {
    if (cart.length > 0) {
      let random = Math.round(Math.random(cart) * (cart.length - 1));
      let randomName = cart[random].name;
      alert("We choose: " + randomName);
    } else {
      alert("Please choose some items");
    }
  };

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
            <button
              onClick={() => handleDeleteItem(cartItem.id)}
              className="item-button"
            >
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleDeleteAll} className="choose-again-btn">
        Choose Again
      </button>
      <button onClick={() => chooseOne(cart)} className="choose-one-btn">
        Choose 1 for Me
      </button>
    </div>
  );
};

export default Cart;
