"use client"
import * as React from "react";
import { Button, Divider, Dropdown, Modal, Popover, Space, message, } from 'antd';
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import tips from '@/assets/svg/tips.svg';
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import axiosReq from '@/utils/req'
import vx_svg from '@/assets/svg/vx.svg';
import zh_svg from '@/assets/svg/zh.svg';
import yinru_png from '@/assets/img/yinru.png';
import logo_png from '@/assets/img/logo.png';
import WxIcon from "../Icon/wx";





const Footer: React.FC<any> = () => {

    const content = (
        <Image src={yinru_png} className="w-[120px] h-[120px]  " alt="bg" />
    );


    const BottomText = ({ text, index }) => {
        return <div className={` hover:text-white  ${index == 0 && 'text-white'}  text-[12px] lg:text-sm   cursor-pointer`}>
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
        <div className=" w-full max-w-[1440px] py-10   " style={{ fontFamily: 'alibb-light' }}>
            <div className=" mt-20 lg:mt-40  " style={{ borderTop: '1px solid #2A2D44' }}> </div>

            <div className=" px-10 lg:px-25  mt-5 lg:mt-13 justify-between flex ">
                <div className=" lg:flex  lg:gap-12">
                    {/* <div className="text-[12px] lg:text-sm"> LOGO</div> */}
                    <div className="flex items-center">
                        <Image src={logo_png} className=" w-[15px] h-[15px]    lg:w-[20px]  lg:h-[20px]     " alt="bg" />
                        <div className=" text-white ml-[6px]  text-[12px] lg:text-sm">隐入科技</div>
                    </div>


                    <div className="flex  lg:gap-13  flex-wrap  gap-1 mt-3 lg:mt-0 ">
                        {textData.map((item, index) => {
                            return (
                                <BottomText key={index} index={index} text={item.name}></BottomText>
                            )
                        })}
                    </div>
                </div>
                <div className=" flex gap-5">
                    <Popover content={content} trigger="hover">
                        <Image src={vx_svg} className="    transition-all transform  hover:scale-125  cursor-pointer   w-[20px] h-[20px]     " alt="bg" />

                        {/* <WxIcon ></WxIcon> */}
                    </Popover>

                    <Image src={zh_svg} className="  cursor-pointer  w-[20px] h-[20px]     " alt="bg" />
                </div>
            </div>
            <div className="lg:px-25 lg:mt-5 mt-1 px-10">
                <div className="lg:flex gap-13 ">
                    <div className=" lg:text-sm text-[12px]" style={{ color: '#8A8F9' }}>地址：浙江省杭州市滨江区星城中心A座1601</div>
                    <div className=" lg:text-sm text-[12px]" style={{ color: '#8A8F9' }}>邮箱：it@ingru.ai</div>
                    <div className=" lg:text-sm text-[12px]" style={{ color: '#8A8F9', wordBreak: 'break-all' }}>联系电话：+86 17788886513 /+86 13918186286</div>

                </div>
            </div>
            <div className=" lg:px-25  px-10">
                <div className=" mt-4 lg:mt-4 w-full   " style={{ borderTop: '1px solid #2A2D44' }}> </div>
            </div>
            <div className=" px-10 lg:mt-5  mt-1 ">
                <div className="flex gap-13 lg:px-15 ">
                    <a className=" lg:text-sm text-[12px] text-start   " style={{ color: '#8A8F9', wordBreak: 'break-all' }}>Copyright©2024隐入（杭州）科技有限公司版权所有<a href="https://beian.miit.gov.cn" className=" cursor-pointer hover:underline">|  浙ICP备2024065338号</a>  | 浙公网安备33010802013495号</a>
                </div>
            </div>
        </div>
    )
}




export default Footer