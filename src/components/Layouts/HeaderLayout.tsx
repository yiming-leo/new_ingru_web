"use client";
import React, { useState, ReactNode, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HeaderTop from "../HeaderTop";
import { Input } from "antd";
import { useStore } from "@/store/useStore";


export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const { isPC, setIsPC } = useStore();




    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="w-full  h-full  bg-bgColor " >

                <HeaderTop></HeaderTop>
                <main className=" block  mt-12 ">
                    <div className=" w-full     flex justify-center bg-bgColor">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
