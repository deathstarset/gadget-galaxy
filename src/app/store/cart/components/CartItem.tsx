"use client";

interface CartItemProps {
  cartItem: CreateCartItem;
}

export default function CartItem({ cartItem }: CartItemProps) {
  return <div>{cartItem.productID}</div>;
}
