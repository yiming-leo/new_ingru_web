"use client"
import * as React from "react";
import { Button, Divider, Modal, Popover, Space, message, } from 'antd';
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import tips from '@/assets/svg/tips.svg';
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import axiosReq from '@/utils/req'
import vx_svg from '@/assets/svg/vx.svg';
import zh_svg from '@/assets/svg/zh.svg';
import { useStore } from "@/store/useStore";

import logo_png from '@/assets/img/logo.png';





const Footer: React.FC<any> = () => {

    const BottomText = ({ text }) => {
        return <div className="  text-[12px] lg:text-sm   cursor-pointer">
            {text}
        </div>
    }

    const textData = [{
        name: '产品',
    },
    {
        name: '算力交易市场',
    }, {
        name: '新一代内容平台',
    }, {
        name: '超级Agent',
    }, {
        name: '大模型云平台',
    }
    ]
    return (
        <div className=" w-full max-w-[1440px] py-10  ">
            <div className=" mt-20 lg:mt-40 h-[1px] " style={{ border: '1px solid #2A2D44' }}> </div>

            <div className=" px-10 lg:px-25  mt-5 lg:mt-13 justify-between flex ">
                <div className=" lg:flex  lg:gap-12">
                    {/* <div className="text-[12px] lg:text-sm"> LOGO</div> */}
                    <div className="flex items-center">
                        <Image src={logo_png} className=" w-[15px] h-[15px]    lg:w-[20px]  lg:h-[20px]     " alt="bg" />
                        <div className=" text-white ml-[6px]  text-[12px] lg:text-sm">隐入科技</div>
                    </div>


                    <div className="flex  lg:gap-13  flex-wrap  gap-1 ">
                        {textData.map((item, index) => {
                            return (
                                <BottomText key={index} text={item.name}></BottomText>
                            )
                        })}
                    </div>
                </div>
                <div className=" flex gap-5">
                    <Image src={vx_svg} className="    w-[20px] h-[20px]     " alt="bg" />
                    <Image src={zh_svg} className="    w-[20px] h-[20px]     " alt="bg" />
                </div>



            </div>
            <div className="lg:px-25 lg:mt-10 mt-1 px-10">
                <div className="lg:flex gap-13 ">
                    <div className=" lg:text-sm text-[12px]" style={{ color: '#8A8F9' }}>地址：浙江省杭州市滨江区星城中心A座1601</div>
                    <div className=" lg:text-sm text-[12px]" style={{ color: '#8A8F9' }}>邮箱：it@ingru.ai</div>
                    <div className=" lg:text-sm text-[12px]" style={{ color: '#8A8F9', wordBreak: 'break-all' }}>联系电话：+86 17788886513 /+86 13918186286</div>

                </div>
            </div>

            <div className="lg:px-25 px-10 lg:mt-5  mt-1 ">
                <div className="flex gap-13 ">
                    <div className=" lg:text-sm text-[12px] text-start  " style={{ color: '#8A8F9', wordBreak: 'break-all' }}>Copyright©2024隐入（杭州）科技有限公司版权所有  |  浙ICP备2024065338号 | 浙公网安备33010802013495号</div>


                </div>
            </div>
        </div>
    )
}




export default Footer