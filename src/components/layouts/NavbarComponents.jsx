import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/Final_Tostriplogo.png";
export function NavbarComponents() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    { path: "/", title: "ទំព័រដើម" },
    { path: "/place", title: "ដំំំណើរទេសចរណ៍" },
    { path: "/about", title: "អំពីយើង" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-[#ffff] shadow-md font-[Suwannaphum]">
      <nav className="max-w-screen-2xl  mx-auto py-4 px-6 md:px-[7%] flex items-center justify-between">
        {/* Logo */}
        <div>
          <NavLink to="/" onClick={() => setTimeout(() => window.location.reload(), 0)}>
            <img src={logo} alt="logo" className="h-15 object-cover" />
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-6 gap-15">
          {menu.map((item, index) => (
            <NavLink
              onClick={() => setTimeout(() => window.location.reload(), 0)}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "text-[#faa834] font-semibold"
                  : "text-black hover:text-[#faa834]"
              }
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:flex space-x-3">
           <Link to={"/auth/login"}>
            <div className="border border-[#faa834] text-black px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
              ចូលគណនី
            </div>
          </Link>
          <Link to={"/auth/register"}>
            <div className="bg-[#faa834] text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            ចុះឈ្មោះ
          </div>
          </Link>
        </div>
        <button className="md:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>
      <div
        className={`md:hidden bg-white absolute w-full top-[60px] left-0 shadow-md transform transition-transform ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className="flex flex-col items-center space-y-4 py-5">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              className="text-black hover:text-[#faa834] text-lg"
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </NavLink>
          ))}

          <Link to={"/auth/login"}>
            <div className="border border-[#faa834] text-black px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
              ចូលគណនី
            </div>
          </Link>
          <Link to={"/auth/register"}>
            <div className="bg-[#faa834] text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            ចុះឈ្មោះ
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
