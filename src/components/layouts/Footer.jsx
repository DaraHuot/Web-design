import React from "react";
import Logo from '../../../public/img/cinema.png';

export default function Footer() {
  return (
    <footer className="px-4 divide-y bg-[#4A0909]  text-gray-100 ">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex flex-col p-[20px]  mr-[20px] justify-center space-x-3 lg:justify-start "
          >
            <img
              src={Logo}
              className="flex-shrink-0 w-[100px] h-[100px] ml-10"
              alt=""
            />
            <span>
              Clarity gives you the blocks <br/> and components you need to <br/> create a
              truly professional website.
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3 sm:text-center lg:text-left ">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white text-[18px] Roboto">
              Company
            </h3>
            <ul className="space-y-4">
              <li className="my-[10px]">
                <a rel="noopener noreferrer " href="#">
                  About
                </a>
              </li>
              <li className="my-[10px]">
                <a rel="noopener noreferrer" href="#">
                  Features
                </a>
              </li>
              <li className="my-[10px]">
                <a rel="noopener noreferrer" href="#">
                  Works
                </a>
              </li>
              <li className="my-[10px]">
                <a rel="noopener noreferrer" href="#">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white text-[18px] Roboto">
              Help
            </h3>
            <ul className="space-y-4">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Customer Support
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Delivery Details
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="py-6 text-[14px] text-center text-white ">
        © Copyright 2025. All Rights Reserved by Cineverse
      </div>
    </footer>
  );
}
