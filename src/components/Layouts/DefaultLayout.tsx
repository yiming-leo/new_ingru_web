"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HeaderTop from "../HeaderTop";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="h-screen overflow-hidden">

        <HeaderTop></HeaderTop>


        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className=" block absolute  top-20 right-0  left-60  bottom-0 overflow-hidden ">
          <div className=" text-xl h-18 z-10 absolute  w-full flex items-center  pl-8 text-fontColor font-normal bg-white" >控制台</div>
          {/* <div className="h-30 " style={{
  
            overflow: 'auto',
            boxSizing:'border-box'
          }}>
            <div style={{height:'300px'}}>123</div>

          </div> */}
          <div className=" w-auto  px-8 pb-6  pt-24 overflow-auto box-border bg-bgGray1    h-full"   >
              {children}
              {/* <div  className="h-100">123</div> */}
            </div>
        </main>



        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
