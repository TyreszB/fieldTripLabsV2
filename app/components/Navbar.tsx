import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isLoggdIn, setIsLoggedIn] = useState(false);

  return (
    <nav>
      <div>
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>About</Link>
        <Link href={"#"}>Home</Link>
      </div>
      {isLoggdIn ? (
        <Link href={"#"}>My Profile</Link>
      ) : (
        <Link href={"#"}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
