"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  productName: string;
  imageUrl: string;
  price: number;
}

export default function WhatsAppButton({
  productName,
  price,
  imageUrl,
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent(
      `Hola, me interesa comprar este producto:

*${productName}*
*Precio*: $${price.toFixed(2)}
*Imagen*: https://${imageUrl}`
      );
    window.open(`https://wa.me/593969506019?text=${message}`, "_blank");
  };

  return (
    <Button
      className="w-full relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <span className="relative z-10">Preguntar por producto</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    </Button>
  );
}
