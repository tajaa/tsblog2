import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="border-b border-white bg-black text-white flex justify-between">
      <div className="text-4xl px-2 py-4">LOGO</div>
      <button className="text-black bg-white px-4 py-2 rounded-sm text-xl">
        sign in
      </button>
    </div>
  );
};
export default Header;
