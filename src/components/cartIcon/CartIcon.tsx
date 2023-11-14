import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex gap-4 items-center">
      <div className="relative left-1 w-4 h-4">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart(3)</span>
    </Link>
  );
};

export default CartIcon;
