"use client";

import { Session } from "next-auth";
import CartItem from "./CartItem";
import { useEffect, useRef, useState } from "react";

interface ItemsViewProps {
  session: Session | null;
}
export default function ItemsView({ session }: ItemsViewProps) {
  const [cartItems, setCartItems] = useState<CreateCartItem[]>([]);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender.current = false;
      return;
    }
    const storedCart: CreateCartItem[] = JSON.parse(
      localStorage.getItem("cart") as string
    );

    if (storedCart) {
      setCartItems(storedCart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  if (!session) {
    return (
      <div>
        {cartItems.length !== 0 ? (
          cartItems.map((item) => {
            return <CartItem key={item.productID} cartItem={item} />;
          })
        ) : (
          <p>No Items in cart</p>
        )}
      </div>
    );
  }
  return <div>Items view</div>;
}
