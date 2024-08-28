"use client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Session } from "next-auth";

interface SelectQuantityProps {
  session: Session | null;
  product: Product;
}
export default function SelectQuantity({
  session,
  product,
}: SelectQuantityProps) {
  const [quantity, setQuantity] = useState(1);

  async function addItem(cartItemInfo: CreateCartItem) {
    if (!session) {
      // getting the cart from local storage
      const cartItems: CreateCartItem[] | null = JSON.parse(
        localStorage.getItem("cart") as string
      );
      // checking if there is a cart in the first place
      if (!cartItems) {
        localStorage.setItem("cart", JSON.stringify([cartItemInfo]));
        return;
      }
      // checking if the item exists in the cart or not
      const itemExist = cartItems.find(
        (item) => item.productID === cartItemInfo.productID
      );
      // adding a new item or adding the quantity based on this
      if (itemExist) {
        localStorage.setItem(
          "cart",
          JSON.stringify(
            cartItems.map((item) =>
              item.productID === cartItemInfo.productID
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          )
        );
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartItems, cartItemInfo])
        );
      }
    }
  }
  function increment() {
    setQuantity(quantity + 1);
  }
  function decrement() {
    if (quantity !== 0) setQuantity(quantity - 1);
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center relative">
        <Button onClick={decrement} className="absolute top-0 left-0">
          -
        </Button>
        <Input
          type="number"
          value={quantity}
          className="remove-arrows outline-none pl-12 w-[150px]"
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        />
        <Button onClick={increment} className="absolute top-0 right-0">
          +
        </Button>
      </div>
      <Button
        className="w-1/3"
        onClick={() => addItem({ quantity: quantity, productID: product.id })}
      >
        Add To Cart
      </Button>
    </div>
  );
}
