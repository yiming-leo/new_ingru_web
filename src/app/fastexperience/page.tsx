"use client"
import HeaderTop from "@/components/HeaderTop";
import * as React from "react";
import { Checkbox, Form, Input, Pagination, Table, type TableProps } from 'antd'
import ButtonLink from '@/components/ButtonLink'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect } from "react";





const ControlBoard: React.FC = () => {
  

  return (
    <div className="h-screen overflow-hidden">
    <HeaderTop></HeaderTop>
<div className="w-auto  py-8 px-8  overflow-auto box-border  h-full " >
<main className="flex   mt-20 flex-col self-center w-full bg-zinc-300 ">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf3510b8b43a831a2e1f2a4e590ddcc1a53e69e749988c9f81156c71ee38de8?apiKey=fe3a31a8193d40e5b4f60783fe4cf276&"
      className="w-full aspect-[4.76] max-md:max-w-full"
      alt="Main visual"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9202f1d5711f4de1417a8002ddb9b64346654a8a46965aebe62adcf53a28c15?apiKey=fe3a31a8193d40e5b4f60783fe4cf276&"
      className="w-full aspect-[1.72] max-md:max-w-full"
      alt="Secondary visual"
    />
  </main>
</div>

  </div>
   




  )
}
export default ControlBoard;