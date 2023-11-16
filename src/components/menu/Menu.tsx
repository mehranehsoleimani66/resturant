"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import CartIcon from "../cartIcon/CartIcon";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 0, title: "HomePage", url: "/" },
    { id: 1, title: "Menu", url: "/menu" },
    { id: 2, title: "WorkingHours", url: "/" },
    { id: 3, title: "HomePage", url: "/" }
  ];
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="absolute bg-green-500 w-full gap-8 h-[calc(100vh-6rem)] left-0 top-24 flex flex-col items-center justify-center text-white">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              LogIn
            </Link>
          ) : (
            <Link href="/order" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
