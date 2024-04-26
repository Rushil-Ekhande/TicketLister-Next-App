import React from "react";

export default function StatusDisplay({ status }) {
  const getColor = (status) => {
    if (status.toLowerCase() == "not started") {
      const color = "bg-red-200";
      return color;
    } else if (status.toLowerCase() == "started") {
      const color = "bg-yellow-200";
      return color;
    } else {
      const color = "bg-green-200";
      return color;
    }
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
}
