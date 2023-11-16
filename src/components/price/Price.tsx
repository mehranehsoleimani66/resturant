"use client";

import React, { useEffect, useState } from "react";

type props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({ price, id, options }: props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, price, options, selected]);

  return (
    <div className="flex gap-4 flex-col">
      <h2>${total.toFixed(2)}</h2>
      <div className="flex gap-4">
        {options?.map((item, index) => (
          <button
            key={item.title}
            className="min-w-[6rem] ring-1 p-2 ring-green-500 rounded-md"
            style={{
              background: selected == index ? "rgb(34 197 94)" : "white",
              color: selected == index ? "white" : "rgb(34 197 94)"
            }}
            onClick={() => setSelected(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center ">
        {/* quantity */}
        <div className="w-full p-3 ring-1 ring-green-500 flex justify-between">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >{`<`}</button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >{`>`}</button>
          </div>
        </div>
        {/* Add to list */}
        <button className="uppercase w-56  bg-green-500  text-white ring-1 ring-green-300 p-3">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
