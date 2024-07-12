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
import ourbg1_png from '@/assets/img/ourbg1.png';

import HeaderLayout from "@/components/Layouts/HeaderLayout";
import Image from "next/image";
import { title } from "process";

const Aboutus: React.FC = () => {
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

    const NewsCard = ({ imageSrc, icon, title, description }) => {
        return (
            <div className="mt-10 lg:mt-0 flex-1">
                <div className=" h-[200px] border" />

                <div className="mt-5">
                    <div className="flex items-center gap-[10px]">
                        <Image src={icon} className="w-4 h-4" alt="bg" />
                        <div className="text-white text-xl">{title}</div>
                    </div>
                    <div className="mt-3 text-16px" style={{ color: 'rgba(239, 237, 253, 0.70)', fontFamily: 'alibb-light' }}>
                        {description}
                    </div>
                </div>
            </div>
        );
    };


    return (
        <HeaderLayout>

            <div className=" w-full max-w-[1920px] flex flex-col  items-center  ">

                <div className="flex flex-col  items-center relative">
                    <Image src={bg_png} className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rotate-12    lg:w-[872px]  lg:h-[731px] " alt="bg" />

                    <div className=" mt-10 lg:mt-34 w-64 h-9  rounded-3xl  flex  items-center px-5 " style={{ background: 'linear-gradient(90deg, rgba(222, 151, 247, 0.24) 0%, rgba(178, 148, 245, 0.24) 50%, rgba(155, 177, 253, 0.24) 100%)' }}>
                        <Image src={star_png} className=" w-8  h-6" alt="bg" />
                        <div className=" text-sm  text-test" >共建算力中心生态构建目标</div>
                    </div>
                    <div className=" mt-6 text-titleColor text-xl lg:text-5xl">以价值创造价值，以梦想成就梦想</div>
                    <div className=" mt-6 text-titleColor   text-[12px]  lg:text-16px" style={{ color: '#B4BCD0' }}  >AGI问题发现者，算力市场创新者，迎接绿色，人本的 AI 时代</div>

                    <div className=" mt-15 ">
                        <Image src={text_png} className="   w-70  lg:w-115   h-20" alt="bg" />
                    </div>
                    <div className=" mt-10 lg:mt-59  w-4/5" style={{ height: '1px', background: ' linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}></div>
                </div>


                <div className=" mt-25 w-full text-center ">
                    <div className="text-2xl lg:text-3xl text-title">
                        我们的企业
                    </div>

                    <div className=" px-[100px] flex gap-[142px] mt-[80px]" >
                        <div className=" ">
                            <div className=" w-[524px] h-[106px] text-start"><span className=" text-[36px]">隐入</span>科技，一家以创新为驱动力的先锋企业，我们以"以价值成就价值，以梦想实现价值"的核心价值观为行动指南，致力于引领我们进入一个绿色、以人为本的人工智能新时代，作为人工智能通用问题（AGI）的探索者和算力市场的创新引领者，我们不断追求技术与市场的和谐共鸣。</div>

                            <div className=" w-[525px] h-[101px] mt-5 rounded-md" style={{ border: '1px solid #313035', background: '#272E3C' }}>
                                <div>
                                    基于对算力作为未来技术发展基石的深刻理解，我们以算力市场平台为核心，汇聚算力资源，紧随AGI技术的发展步伐，我们通过创新性的产品组合，不断实现产品的创建和迭代，为用户提供高效、智能、安全的算力资源服务。
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={ourbg1_png} className="w-[536px] h-[300px]   " alt="bg" />

                        </div>

                    </div>




                </div>












                {/* 底部 */}

                <div className=" w-full max-w-[1440px] py-10  ">
                    <div className=" mt-20 lg:mt-40 h-[1px] " style={{ border: '1px solid #2A2D44' }}> </div>

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

                    {/* <div className="px-25 mt-5  ">
              <div className="flex gap-13 ">
                <div className=" text-sm" style={{ color: '#8A8F9' }}>Copyright©2024隐入（杭州）科技有限公司版权所有  |  浙ICP备2024065338号</div>


              </div>
            </div> */}
                </div>
            </div>

        </HeaderLayout >


    );

}
export default Aboutus;
