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
import logo from "../../assets/Final_Tostriplogo.png"; 

const FooterComponent = () => {
  return (
    <Footer container className="bg-white px-6 sm:px-10 lg:px-[8%] py-12 shadow-md ">
      <div className="w-full">
      
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
       
          <div className="flex items-center justify-center sm:justify-start mb-6 sm:mb-0">
            <img src={logo} alt="tos Trip logo" className="w-20" />
          </div>

          <div className="grid grid-cols-2  gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6  ">
            <div className="flex flex-col items-center sm:items-start md:items-center">
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
            {/* Help Services */}
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
            {/* Contact Info */}
            <div>
              <FooterTitle title="ទំនាក់ទំនង" />
              <FooterLinkGroup col>
                <FooterLink href="mailto:reachraydy000@gmail.com">reachraydy000@gmail.com</FooterLink>
                <FooterLink href="#">0888888888</FooterLink>
                <FooterLink href="#">កម្ពុជា, ភ្នំពេញ</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Tos Trip™" year={2025} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
