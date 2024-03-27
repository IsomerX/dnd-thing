import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <html>
      <body className="w-full">
        {props.children}
        <div
          className="h-20 w-full aspect-square bg-red-100"
          id="between"
        ></div>
        <div className="flex gap-5 p-5">
          <div
            id="slot-1"
            className="grid place-items-center w-full py-20 border-white/20 border-2"
          ></div>
          <div
            id="slot-2"
            className="grid place-items-center w-full py-20 border-white/20 border-2"
          ></div>
        </div>
      </body>
    </html>
  );
};
export default Layout;
