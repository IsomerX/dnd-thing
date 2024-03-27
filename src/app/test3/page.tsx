"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const DisplayUser = ({ userName }: { userName: string }) => {
  //  const [count, setCount] = React.useState(1);
  //  return (
  //    <div className="font-bold text-xl">
  //      {userName}{" "}
  //      <button
  //        onClick={() => setCount(count + 1)}
  //        className="p-4 border-4 border-yellow-100"
  //      >
  //        {count}
  //      </button>
  //    </div>
  //  );

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dummy Component</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <input className="text-black" />
    </div>
  );
};

const Page = () => {
  const [mounted, setMounted] = React.useState(false);
  const [userName, setUsername] = React.useState("bakshh");
  const [count, setCount] = React.useState(1);
  useEffect(() => setMounted(true), []);

  const clickHandler = () => {
    const parent = document.getElementById(`slot-${count}`);
    const element = document.getElementById("container");
    if (element && parent) {
      parent.appendChild(element);
      setCount(count === 1 ? 2 : 1);
    }
  };

  return (
    <div>
      hey
      {mounted
        ? createPortal(
            <DisplayUser userName={userName} />,
            document.getElementById("container")!,
          )
        : null}
      <button className="p-3 border-2 border-white/20" onClick={clickHandler}>
        toggle
      </button>
    </div>
  );
};
export default Page;
