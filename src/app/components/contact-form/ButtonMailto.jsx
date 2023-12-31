import Link from "next/link";
import React from "react";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      href="#"
      className="font-semibold transition-all hover:text-blue-500 hover:underline"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
