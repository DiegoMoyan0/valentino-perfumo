import React from "react";

const TabButton = ({ selectTab, active, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 rounded-md mr-4 focus:outline-none 
                 ${active ? 'bg-white text-black' : 'bg-transparent text-white'}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
