import React from "react";
import { Link } from "react-router";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import logo from "../../assets/Final_Tostriplogo.png";

const FooterComponent = () => {
  return (
    <footer className="  px-6 sm:px-10 md:px-[8%] py-10 shadow-md  bg-[#ffffff] font-[Suwannaphum]">
      <div className="max-w-7xl mx-auto ">
        <div  className="flex  justify-around items-center flex-col lg:flex-row gap-8">
          <div className="flex justify-center lg:justify-start ">
            <img src={logo} alt="Tos Trip logo" className="w-20 h-18" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-1 ">
            <div className="text-center">
              <h4 className="text-lg  mb-4">ការស្វែងរក</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/" >ទំព័រដើម</Link></li>
                <li><Link to="/about" >អំពីយើង</Link></li>
                <li><Link to="/place" >ដំណើរទេសចរណ៍</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-lg  mb-4">តំណភ្ជាប់រហ័ស</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/faqs" >រូបភាព</Link></li>
                <li><Link to="/discounts" >ការចូល</Link></li>
                <li><Link to="/licenses" >ការចុះឈ្មោះ</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-lg mb-4">ទំនាក់ទំនង</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <MdOutlineMail className="text-xl" />
                  <a href="mailto:reachraydy000@gmail.com">nadrayoky000@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <LuPhone className="text-xl" />
                  <a href="tel:+85588888888" >0716249197</a>
                </li>
                <li className="flex items-center gap-2">
                  <MdOutlineLocationOn className="text-xl" />
                  <span>អាសយដ្ឋាន : ទួលគោក, រាជធានីភ្នំពេញ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-t border-gray-300" />
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Tos Trip_KH</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
