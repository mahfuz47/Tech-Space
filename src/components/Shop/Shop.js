import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    if (newCart.length > 4) {
      alert("You can not add more than 4 Items");
    } else if (cart.find((item) => item.id === product.id)) {
      alert("You have already selected this item");
    } else {
      setCart(newCart);
    }
  };

  useEffect(() => {
    fetch("gadgets.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} setCart={setCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
