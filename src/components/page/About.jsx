import React from "react";
import sreyPhea from "../../assets/sreyPhea.jpg"
import laihoung from "../../assets/laihoung.jpg"
import vann from "../../assets/vann.jpg"
import na from "../../assets/na.jpg"
import lida from "../../assets/lida.jpg"
import dara from "../../assets/dara.jpg"
import pheng from "../../assets/pheng.jpg"



export default function About() {
  return (
    <>
      <main className="mx-24 " >
        {/* mentors */}
        <h2 className="text-2xl lg:text-[32px] text-center mt-10 font-bold">Mentors</h2>
        {/* <p className="text-center text-">Lorem ipsum dolor sit.</p> */}
        <section className="block space-y-6 lg:space-y-0 lg:flex gap-8 mb-10 mt-5">
          <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
            <img
              src={sreyPhea}
              alt="Mentor"
              className="w-full md:w-2/4 object-cover"
            />
            <div className="md:w-2/4 space-y-4 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800">Sin Sreyphea</h2>
              <p className="text-gray-600 mt-2">Help with:</p>
              <span className="bg-gray-200 text-gray-700 text-center text-sm px-4 py-2 rounded-full inline-block mt-2">
                UX/UI Design
              </span>
              <hr className="border border-gray-400" />
              <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-twitter" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-facebook" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-instagram" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
            <img
              src={pheng}
              alt="Mentor"
              className="w-full md:w-2/4 object-cover"
            />
            <div className="md:w-2/4 space-y-4 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800">Kim Chansokpheng</h2>
              <p className="text-gray-600 mt-2">Help with:</p>
              <span className="bg-gray-200 text-gray-700 text-center text-sm px-4 py-2 rounded-full inline-block mt-2">

                Backend
              </span>
              <hr className="border border-gray-400" />
              <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-twitter" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-facebook" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-instagram" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        

        <h2 className="text-2xl lg:text-[32px] text-center  font-bold">Team Members</h2>
        <p className="text-center text-white">This is our members.</p>
        <section className="mx-auto mb-10 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-9">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[90%]">
              <div className="h-[70%]">
                <img
                  src={vann}
                  alt="Tith Ang Monyvann"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[30%] p-2 flex justify-center items-center">
             
                <h3 className="text-center text-sm font-semibold text-black">
                <p className="text-lg">Leader</p>
                  Tith Ang Monyvann
                  
                </h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[90%]">
              <div className="h-[70%]">
                <img
                  src={dara}
                  alt="Huot Dara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[30%] p-2 flex justify-center items-center">
                <h3 className="text-center text-sm font-semibold text-black">
                <p className="text-lg">Member</p>
                Huot Dara
                </h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[90%]">
              <div className="h-[70%]">
                <img
                  src={laihoung}
                  alt="  Khim Laihuong"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[30%] p-2 flex justify-center items-center">
                <h3 className="text-center text-sm font-semibold text-black">
                <p className="text-lg">Member</p>
                  Khim Laihuong
                </h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[90%]">
              <div className="h-[70%]">
                <img
                  src="../image/user2.jpg"
                  alt="Khem Sopheanan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[30%] p-2 flex justify-center items-center">
                <h3 className="text-center text-sm font-semibold text-black">
                <p className="text-lg">Member</p>
                  Khem Sopheanan
                </h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[90%]">
              <div className="h-[70%]">
                <img
                  src={na}
                  alt="Soeun Viwathana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[30%] p-2 flex justify-center items-center">
                <h3 className="text-center text-sm font-semibold text-black">
                <p className="text-lg">Member</p>
                Soeun Viwathana
                </h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[90%]">
              <div className="h-[70%]">
                <img
                  src={lida}
                  alt="Unso Lida"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[30%] p-2 flex justify-center items-center">
                <h3 className="text-center text-sm font-semibold text-black">
                <p className="text-lg">Member</p>
                Oeng Sikeat
                </h3>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[90%]">
              <div className="h-[70%]">
                <img
                  src={lida}
                  alt="Unso Lida"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[30%] p-2 flex justify-center items-center">
                <h3 className="text-center text-sm font-semibold text-black">
                <p className="text-lg">Member</p>
                Unso Lida
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
      </main>
    </>
  );
}
