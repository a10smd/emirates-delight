"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../../app/ThemeSwitcher";
import { useSession, signOut } from "next-auth/react";
import { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import ShoppingCart from "../icons/ShoppingCart";
import Bars2 from "../icons/Bars2";

function AuthLinks({ status, userName }) {
  if (status === "authenticated") {
    return (
      <>
        <div>
          {" "}
          {/* Wrap the Hello, {userName} in a div */}
          <Link href={"/profile"} className="link1 whitespace-nowrap">
            Hello, {userName}
          </Link>
        </div>
        <button onClick={() => signOut()} className="signup-button">
          <div className="wrapper">
            <span>Logout</span>
            {/* Circles */}
            {[...Array(12)].map((_, index) => (
              <div key={index} className={`circle circle-${12 - index}`} />
            ))}
          </div>
        </button>
      </>
    );
  }

  if (status === "unauthenticated") {
    return (
      <>
        <Link href={"/signup"}>
          <button className="signup-button">
            <div className="wrapper">
              <span>Sign Up</span>
              {/* Circles */}
              {[...Array(12)].map((_, index) => (
                <div key={index} className={`circle circle-${12 - index}`} />
              ))}
            </div>
          </button>
        </Link>
        <Link href={"/login"}>
          <button className="uiverse">
            <div className="wrapper">
              <span>Login</span>
              {/* Circles */}
              {[...Array(12)].map((_, index) => (
                <div key={index} className={`circle circle-${12 - index}`} />
              ))}
            </div>
          </button>
        </Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();

  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.fullname || userData?.email;
  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <header>
      <div className="flex items-center md:hidden justify-between">
        <a href="/">
          <Image
            src="/Logo.png"
            width={180}
            height={150}
            alt="Emirates Delight"
          />
        </a>
        <div className="flex gap-8 items-center ">
          <ThemeSwitcher />
          <Link href={"/cart"} className="relative ">
            <ShoppingCart />
            {cartProducts.length > 0 && (
              <span className="absolute -top-2 -right-4 pt-[3px] font-extrabold bg-orange-500 text-black text-xs h-[21px] w-[21px] items-center text-center rounded-full">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            className="buttoncategoriesedit p-1 border"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          className="md:hidden p-4 bg-gray-100 rounded-xl mt-2 flex flex-col gap-2 text-black text-center font-semibold"
          onClick={() => setMobileNavOpen(false)}
        >
          <Link href={"/"} className="navbar-link">
            Home
          </Link>
          <Link href={"/menu"} className="navbar-link">
            Menu
          </Link>
          <Link href={"/about"} className="navbar-link">
            About
          </Link>
          <Link href={"/contact"} className="navbar-link">
            Contact
          </Link>

          <AuthLinks status={status} userName={userName} />
        </div>
      )}

      <div className="hidden md:flex items-center justify-between ">
        <nav className="flex items-center gap-8 font-semibold">
          <a href="/">
            <Image
              src="/Logo.png"
              width={180}
              height={150}
              alt="Emirates Delight"
            />
          </a>
        </nav>

        <nav className="flex flex-wrap gap-6 text-gray-500 font-semibold justify-center sm:justify-start">
          <Link href={"/"} className="navbar-link">
            Home
          </Link>
          <Link href={"/menu"} className="navbar-link">
            Menu
          </Link>
          <Link href={"/about"} className="navbar-link">
            About
          </Link>
          <Link href={"/contact"} className="navbar-link">
            Contact
          </Link>
        </nav>

        {/* Theme Switcher */}
        <ThemeSwitcher />

        {/* Auth Buttons */}
        <nav className="flex gap-6 text-gray-500 font-semibold justify-center sm:justify-end items-center">
          <AuthLinks status={status} userName={userName} />
          <Link href={"/cart"} className="relative flex items-center">
            <ShoppingCart />
            {cartProducts.length > 0 && (
              <span className="absolute -top-2 -right-4 pt-[3px] font-extrabold bg-orange-500 text-black text-xs h-[21px] w-[21px] items-center text-center rounded-full">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
