import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center">
        <svg
          className="animate-spin h-12 w-12 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v-4c2.485 0 4.746-.89 6.501-2.358l1.499 2.598zm-9-7.938A7.962 7.962 0 0116 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Loading;
