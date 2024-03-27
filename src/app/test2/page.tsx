"use client";
import React, { forwardRef, memo, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Card = () => {
  console.log("rendered");
  const [count, setCount] = React.useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const Page = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  const element1 = document.getElementById("slot-1");
  const element2 = document.getElementById("slot-2");

  const [currentElement, setCurrentElement] = useState(element1);

  useEffect(() => {
    const eleChild = currentElement?.childNodes;
    if (!element1 || !element2) return;
    if (currentElement === element1) {
      element2?.appendChild(eleChild![0]);
    } else {
      element1?.appendChild(eleChild![0]);
    }
  }, [currentElement]);

  return (
    <div className="flex gap-5 p-5 w-full">
      {mounted
        ? createPortal(
            <Card key="asd" />,
            document.getElementById("slot-1")!,
            "12",
          )
        : null}
      <button
        onClick={() =>
          setCurrentElement(currentElement === element1 ? element2 : element1)
        }
      >
        Toggle
      </button>
    </div>
  );
};
export default Page;
