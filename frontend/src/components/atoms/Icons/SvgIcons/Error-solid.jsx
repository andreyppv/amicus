import React from "react";

export default function Error({
  size = "2.4rem",
  fill = "none",
  color = "#FF3B3B",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12ZM9.14323 8.20636L11.9974 11.0648L14.8572 8.20593C15.4826 7.58078 16.4189 8.5202 15.7935 9.14535L12.9346 12.0034L15.782 14.8551C16.4068 15.4808 15.4696 16.4194 14.8448 15.7936L11.9966 12.9411L9.14281 15.7941C8.51746 16.4192 7.58113 15.4798 8.20647 14.8546L11.0594 12.0026L8.20605 9.14493C7.58127 8.51921 8.51844 7.58064 9.14323 8.20636Z"
        fill={color}
      />
    </svg>
  );
}
