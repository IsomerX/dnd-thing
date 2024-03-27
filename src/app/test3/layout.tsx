import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div>
      <div id="container"></div>
      <div id="slot-1" className="w-full border-2 border-blue-200 p-20"></div>
      <div id="slot-2" className="w-full border-2 border-yellow-200 p-20"></div>
      {props.children}
    </div>
  );
};
export default Layout;
