import { useState } from "react";
import { NavLink } from "react-router"; 
import { HiMenu, HiX } from "react-icons/hi"; 

export function NavbarComponents() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { path: "/", title: "ទំព័រដើម" },
    { path: "/products", title: "ផលិតផល" },
    { path: "/about", title: "អំពីយើង" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-[Suwannaphum]">
      <nav className="max-w-screen-2xl mx-auto py-4 px-6 md:px-[10%] flex items-center justify-between">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src="/logo.png" alt="logo" className="h-10" />
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-6">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold"
                  : "text-black hover:text-yellow-500"
              }
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:flex space-x-3">
          <button className="border border-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
            ចូលគណនី
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            ចុះឈ្មោះ
          </button>
        </div>
        <button className="md:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>
      <div
        className={`md:hidden bg-white absolute w-full top-[60px] left-0 shadow-md transform transition-transform ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              className="text-black hover:text-yellow-500 text-lg"
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </NavLink>
          ))}

          <button className="border border-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
            ចូលគណនី
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            ចុះឈ្មោះ
          </button>
        </div>
      </div>
    </header>
  );
}
