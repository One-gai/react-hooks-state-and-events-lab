import React from "react";

function Item({ name, category }) {
  return (
    <div>   
      <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
    <li className="in-cart">

    </li>
    </div>

  );
}

export default Item;
