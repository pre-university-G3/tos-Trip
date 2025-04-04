import React from "react";
import { NavbarComponents } from "./NavbarComponents";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <NavbarComponents />
      <main className="">
        <Outlet />
      </main>
      {/* footer */}
    </div>
  );
}
