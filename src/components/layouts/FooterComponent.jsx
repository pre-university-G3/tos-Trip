import React from "react";
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLinkGroup,
  FooterLink,
  FooterTitle,
} from "flowbite-react";
import { Link } from "react-router";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import logo from "../../assets/Final_Tostriplogo.png";

const FooterComponent = () => {
  return (
    <Footer container className="bg-[#fcf5f5] px-6 sm:px-10 md:px-[8%] py-12 shadow-md shadow-Primary">
      <div className="w-full">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="Tos Trip logo" className="w-20 h-20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <FooterTitle title="ការស្វែងរក" />
              <FooterLinkGroup col>
                <Link to="/">
                  <FooterLink>ទំព័រដើម</FooterLink>
                </Link>
                <Link to="/about">
                  <FooterLink>អំពីយើង</FooterLink>
                </Link>
                <Link to="/place">
                  <FooterLink>ដំណើរទេសចរណ៍</FooterLink>
                </Link>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="ជំនួយសេវា" />
              <FooterLinkGroup col>
                <Link to="/faqs">
                  <FooterLink>FAQs</FooterLink>
                </Link>
                <Link to="/discounts">
                  <FooterLink>បញ្ចុះតម្លៃ</FooterLink>
                </Link>
                <Link to="/licenses">
                  <FooterLink>អាជ្ញាប័ណ្ណ</FooterLink>
                </Link>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="ទំនាក់ទំនង" />
              <FooterLinkGroup col>
                <FooterLink href="mailto:reachraydy000@gmail.com" >
                  <li className="flex items-center gap-2">
                    <MdOutlineMail className="flex " />reachraydy000@gmail.com
                  </li>
                </FooterLink>
                <FooterLink href="#">
                  <li>
                    <LuPhone />
                    0888888888
                  </li>
                </FooterLink>
                <FooterLink href="#">កម្ពុជា, ភ្នំពេញ</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider className="my-8" />
        <div className="flex flex-col md:flex-row justify-center  items-center gap-4">
          <FooterCopyright href="#" by="Tos Trip™" year={2025} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
