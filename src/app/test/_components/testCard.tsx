import React, { useRef, useState } from "react";

const DragElement = () => {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const offsetX = useRef(0);
  const offsetY = useRef(0);
  const startX = useRef(0);
  const startY = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const { left, top } = dragRef.current.getBoundingClientRect();
    offsetX.current = e.clientX - left;
    offsetY.current = e.clientY - top;
    startX.current = e.clientX;
    startY.current = e.clientY;
    requestAnimationFrame(animateDrag);
  };

  const animateDrag = () => {
    if (!isDragging) return;
    dragRef.current.style.transform = `translate(${
      startX.current - offsetX.current
    }px, ${startY.current - offsetY.current}px)`;
    requestAnimationFrame(animateDrag);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={dragRef}
      style={{
        position: "absolute",
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        cursor: isDragging ? "grabbing" : "grab",
        transition: isDragging ? "none" : "transform 0.1s ease", // Optional: Add transition for smoother movement
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

export default DragElement;
