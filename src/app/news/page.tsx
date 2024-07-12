


"use client"
import React, { useEffect, useMemo, useState } from "react";
import { Descriptions, message } from 'antd';
import axiosReq from '@/utils/req'
import { useStore } from "@/store/useStore";
import HomePage from "@/components/HomeComponent/HomePage";
import FastExperience from "@/components/HomeComponent/FastExperience";
import Overview from "@/components/HomeComponent/Overview";
import bg_png from '@/assets/img/bgImg.png';
import star_png from '@/assets/img/star.png';
import text_png from '@/assets/img/text.png';
import arrows_png from '@/assets/img/arrows.png';
import camera_png from '@/assets/img/camera.png';
import safe_png from '@/assets/img/safe.png';
import shandian_png from '@/assets/img/shandian.png';
import agentNet_png from '@/assets/img/AgentNet.png';
import LMCloud_png from '@/assets/img/LMCloud.png';
import icon11_png from '@/assets/img/icon11.png';
import icon22_png from '@/assets/img/icon22.png';
import icon33_png from '@/assets/img/icon33.png';
import vx_svg from '@/assets/svg/vx.svg';
import zh_svg from '@/assets/svg/zh.svg';
import bg2_png from '@/assets/img/bg2.png';
import star2_png from '@/assets/img/star2.png';
import beacon_png from '@/assets/img/beacon.png';
import suanli1_png from '@/assets/img/suanli1.png';
import suanli2_png from '@/assets/img/suanli2.png';

import HeaderLayout from "@/components/Layouts/HeaderLayout";
import Image from "next/image";
import { title } from "process";

const News: React.FC = () => {
    const Card = ({ imageSrc, icon, title, description }) => {
        return (
            <div className="lg:w-80 lg:h-50 mt-5 lg:mt-0">
                <Image src={imageSrc} className=" mx-auto w-[323px] h-[195px]" alt="bg" />

                <div className="px-3    ">
                    <div className="flex items-center justify-center lg:justify-start  gap-[10px]">
                        <Image src={icon} className="w-4 h-4" alt="bg" />
                        <div className="text-white lg:text-xl  text-[16px]">{title}</div>
                    </div>
                    <div className="mt-3 lg:text-16px text-center lg:text-start   lg:px-0 px-15   text-sm  " style={{ color: 'rgba(239, 237, 253, 0.70)', fontFamily: 'alibb-light' }}>
                        {description}
                    </div>
                </div>
            </div>
        );
    };

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


    const { isPC, setIsPC } = useStore();

    const cardData: any = [{ imageSrc: safe_png, icon: icon33_png, title: 'DeKnow', description: '新一代内容平台，利用大模型实现文本、图像、语音等实现结构化内容生成' },
    { imageSrc: agentNet_png, icon: icon11_png, title: 'AgentNet', description: '多智能体系统，系统Agent进行智能编排调控，具备自主决策、感知环境' },
    { imageSrc: LMCloud_png, icon: icon22_png, title: 'LM Cloud', description: '大模型云平台，支撑AGI计算基础设施能力，助力用户低成本部署AGI模型及应用' }
    ]



    const newsName = [{ name: '全部' },]

    const TabMenu = () => {
        return (
            <div style={{ fontFamily: 'alibb-light' }} className=" text-[12px] lg:text-16px flex gap-5 items-center  text-violet-100 text-opacity-70 ">
                <div className="flex flex-col justify-center self-stretch text-white ">
                    <div className=" cursor-pointer justify-center px-3.5 lg:py-2.5 rounded-lg border border-solid border-slate-800">
                        全部
                    </div>
                </div>
                <div className="self-stretch my-auto cursor-pointer z-10">企业动态</div>
                <div className="self-stretch my-auto cursor-pointer z-10" >行业动态</div>
                <div className="self-stretch my-auto cursor-pointer z-10">技术动态</div>
                <div className="self-stretch my-auto cursor-pointer z-10">合作生态</div>
            </div>
        );
    };

    const NewsContent = ({ index }) => {
        return (

            <>
                <div className="mt-16 w-full ">
                    <div className="lg:flex   gap-8 ">

                        <div className=" w-3/4 h-[120px] mx-auto  lg:w-[320px]  bg-gray-800 rounded-xl lg:h-[168px]   border" ></div>



                        <div className="flex flex-col max-w-[762px] ">
                            <div className=" mt-10 lg:mt-0 flex flex-col self-stretch px-5  text-base font-light text-violet-100 text-opacity-70  ">
                                <div className=" text-sm  lg:text-xl  text-white max-md:max-w-full">
                                    超级Agent
                                </div>
                                <div className="mt-2 max-md:max-w-full lg:text-16px text-[12px]" style={{ fontFamily: 'alibb-light' }}>
                                    预装环境，一键部署，无需运维，热门主流大模型 AI
                                    程序快速升级，先体验，再部署预装环境，一键部署，无需运维，热门主流大模型
                                    AI
                                    程序快速升级，先体验，再部署预装环境，一键部署，无需运维，热门主流大模型
                                    AI
                                    程序快速升级，先体验，再部署预装环境，一键部署，无需运维，热门主流大模型
                                    AI 程序快速升级，先体验，再部署
                                </div>
                                <div className=" mt-2 lg:mt-5 max-md:max-w-full text-12px lg:text-[16px]" style={{ fontFamily: 'alibb-light' }}>2023-01-08 10:00:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                {index !== 3 && <div className=" mt-5 lg:mt-10 w-full border border-solid bg-slate-800 border-slate-800 min-h-[1px] max-md:max-w-full" />}
            </>
        )
    }


    return (
        <HeaderLayout>

            <div className=" w-full max-w-[1440px] flex flex-col  items-center  ">

                <div className="flex flex-col  items-center relative">
                    <Image src={bg_png} className=" lg:scale-150  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:rotate-[20deg]    lg:w-[872px]  lg:h-[731px] " alt="bg" />


                    <div className="  mt-20 lg:mt-45 text-titleColor text-xl lg:text-5xl">新闻资讯</div>
                    <div className=" mt-6 text-titleColor px-15 lg:px-0    text-center  lg:w-[480px] lg:leading-6 text-[12px]  lg:text-16px" style={{ color: '#B4BCD0', fontFamily: 'alibb-light' }}  >最全面及时的行业资讯、企业动态</div>




                </div>
                <div className=" mt-10 lg:mt-34  w-full" style={{ height: '12px', background: ' linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}></div>

                <div className=" mt-[60px] w-full px-[10px] lg:px-[164px]">

                    <div className="flex flex-col">
                        <TabMenu></TabMenu>
                        {[1, 2, 3, 4].map((item, index) => {
                            return (
                                <NewsContent key={index} index={index} />
                            )
                        })}

                    </div>
                </div>



                {/* 底部 */}

                <div className=" w-full max-w-[1440px] pb-10 mt-27  ">
                    <div className=" h-[1px] " style={{ border: '1px solid #2A2D44' }}> </div>

                    <div className=" px-10 lg:px-25  mt-5 lg:mt-13 justify-between flex ">
                        <div className=" lg:flex  lg:gap-25">
                            <div className="text-[12px] lg:text-sm"> LOGO</div>
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
                            <div className=" text-[12px]" style={{ color: '#8A8F9' }}>地址：浙江省杭州市滨江区星城中心B座1101</div>
                            <div className=" text-[12px]" style={{ color: '#8A8F9' }}>邮箱：it@ingru.ai</div>
                            <div className=" text-[12px]" style={{ color: '#8A8F9' }}>联系电话：+86 17788886513 / 13918186286</div>

                        </div>
                    </div>

                    <div className="lg:px-25 px-10 lg:mt-5  mt-1 ">
                        <div className="flex gap-13 ">
                            <div className=" lg:text-sm text-[12px]" style={{ color: '#8A8F9' }}>Copyright©2024隐入（杭州）科技有限公司版权所有  |  浙ICP备2024065338号</div>


                        </div>
                    </div>
                </div>
            </div>

        </HeaderLayout >


    );

}
export default News;
