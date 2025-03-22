import React from "react";
import XIcon from "./XIcon";
import OIcon from "./OIcon";

const Square = ({ value, onClick }) => {
    return (
        <button
            className="w-24 h-24 bg-gradient-to-r from-indigo-400 to-blue-400 border-4 border-blue-500 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 focus:outline-none cursor-pointer"
            onClick={onClick}
        >
            {value === "X" ? <XIcon /> : value === "O" ? <OIcon /> : null}
        </button>
    );
};

export default Square;
