"use client";
import React, { useEffect } from "react";
import DragElement from "./_components/testCard";
const Page = () => {
  const cards = [1, 2, 3, 4];
  return (
    <body className="bg-black">
      <div className="h-screen w-full grid gap-5 p-5 grid-cols-2">
        {cards.map((card) => (
          <DragElement key={card} />
        ))}
      </div>
    </body>
  );
};
export default Page;
