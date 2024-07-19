


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
import logo_png from '@/assets/img/text_logo.png';

import HeaderLayout from "@/components/Layouts/HeaderLayout";
import Image from "next/image";
import { title } from "process";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
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

    const cardData: any = [{ imageSrc: safe_png, icon: icon33_png, title: 'DeKnow', description: '新一代内容平台，利用大模型实现结构化内容输出' },
    { imageSrc: agentNet_png, icon: icon11_png, title: 'AgentNet', description: '智能体网络，分布式多智能体即服务，系统Agent智能编排调控' },
    { imageSrc: LMCloud_png, icon: icon22_png, title: 'LM Cloud', description: '大模型云平台，规模化、标准化、高效能的生成式AGI计算基础设施' }
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

    const router = useRouter()

    const goLink = () => {
        router.push('/')
    }

    return (
        <HeaderLayout>

            <div className=" w-full max-w-[1920px] flex flex-col  items-center  ">

                <div className="flex flex-col  items-center relative">
                    <Image src={bg_png} className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:rotate-[20deg]    lg:w-[872px]  lg:h-[831px] " alt="bg" />

                    <div className=" mt-10 lg:mt-25  w-39  h-9  rounded-3xl  flex  items-center px-5 " style={{ background: 'linear-gradient(90deg, rgba(222, 151, 247, 0.24) 0%, rgba(178, 148, 245, 0.24) 50%, rgba(155, 177, 253, 0.24) 100%)' }}>
                        <Image src={star_png} className=" w-8  h-6" alt="bg" />
                        <div className=" text-sm  text-test" >算力交易市场</div>
                    </div>
                    <div className=" mt-6 text-titleColor text-xl lg:text-5xl">人人提供算力，人人使用算力</div>
                    <div className=" mt-6 text-titleColor px-15 lg:px-0    text-center  lg:text-start lg:w-[480px] lg:leading-6 text-[12px]  lg:text-16px" style={{ color: '#B4BCD0', fontFamily: 'alibb-light' }}  >算力交易新生态，优化资源配置，激发闲置算力，共创算力市场繁荣 打造算力统一大市场</div>


                    <div className=" mt-8  w-full px-16 flex justify-center lg:justify-start  ">

                        <div className=" relative  cursor-pointer z-10 flex  items-center justify-center lg:w-[137px] lg:h-[45px]  w-[120px] h-[35px]" style={{ borderRadius: '24px', background: 'linear-gradient(90deg, #455EB5 0%, #5643CC 50%, #673FD7 100%)' }}>
                            <Image src={star_png} className=" w-8  h-6" alt="bg" />
                            <div className="   text-white " onClick={goLink}>立即使用</div>
                        </div>

                    </div>
                    <div className=" mt-10 lg:mt-20  w-full" style={{ height: '1px', background: ' linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}></div>
                </div>


                <div className=" mt-15 lg:mt-30 w-full text-center ">
                    <div className="text-2xl lg:text-3xl text-title">
                        算力平台
                    </div>
                    <div className=" mt-3  text-[14px]  lg:text-16px" style={{ color: '#B4BCD0', fontFamily: 'alibb-light' }}>
                        实现Agent智能体、AGI应用消费普惠分布式算力
                    </div>




                </div>

                <div className=" mt-5 lg:mt-20 w-full relative max-w-[1440px]">

                    <div className="  lg:flex  justify-between w-full ">
                        <div className=" mt-[30px]  lg:mt-[74px]  lg:pl-50 ">

                            <div className="  text-white  text-[14px]  lg:text-xl  text-center lg:text-start ">
                                算力变现
                            </div>
                            <div className=" text-[12px]   px-[35px] lg:px-[0px] lg:text-16px  w-full  lg:w-[380px]  mt-3 " style={{ color: 'rgba(239, 237, 253, 0.70)', fontFamily: 'alibb-light' }}>
                                共享闲置算力，赚取算力点，加入分布式算力网络，共建高效、可持续的AI算力生态系统
                            </div>
                        </div>

                        <div>
                            <Image src={suanli1_png} className="   w-[688px]  h-[200px]  lg:h-[333px]" alt="bg" />
                        </div>

                    </div>

                    {!isPC && <div className=" w-full h-[1px] mt-5  mb-10" style={{ background: 'linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}>
                        <div className=" absolute w-[20px] h-[1px] bg-white  left-1/2 transform  -translate-x-1/2" style={{ boxShadow: '0px 0px 10px 2px #7877C6' }}>
                        </div>
                    </div>}


                    {isPC && <div className="  lg:mt-5  lg:flex  justify-between w-full ">
                        <div className=" pl-25">
                            <Image src={suanli2_png} className="   w-[520px]  h-[252px]" alt="bg" />
                        </div>
                        <div className="lg:mt-[74px]  lg:pr-[245px] ">

                            <div className="  text-white text-[14px]  lg:text-xl">
                                普惠算力
                            </div>
                            <div className=" lg:text-16px  text-[12px] w-[380px]  mt-3" style={{ color: 'rgba(239, 237, 253, 0.70)', fontFamily: 'alibb-light' }}>
                                快速创建算力资源，界面化部署AI应用，低成本使用算力资源
                            </div>
                        </div>
                    </div>}

                    {!isPC && <div className=" w-full ">

                        <div className="lg:mt-[74px]  lg:pr-[245px] ">

                            <div className="  text-white text-[14px]  text-center">
                                普惠算力
                            </div>
                            <div className=" lg:text-16px  text-[12px] lg:w-[380px] px-[35px]  mt-3" style={{ color: 'rgba(239, 237, 253, 0.70)', fontFamily: 'alibb-light' }}>
                                快速创建算力资源，界面化部署AI应用，低成本使用算力资源
                            </div>
                        </div>
                        <div className=" pl-25">
                            <Image src={suanli2_png} className="   w-[520px]  h-[200px]" alt="bg" />
                        </div>
                    </div>}

                    {isPC && <div className=" w-[1px] h-[587px] absolute top-0 left-1/2 " style={{ background: 'linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}>
                        <div className=" absolute w-[1px] h-[20px] bg-white top-1/2 transform  -translate-y-1/2" style={{ boxShadow: '0px 0px 10px 2px #7877C6' }}>
                        </div>
                    </div>}
                </div>

                <div className="  mt-10 lg:mt-20  w-full" style={{ height: '1px', background: ' linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}></div>




                <div className=" lg:mt-30  mt-10 w-full text-center ">
                    <div className="text-2xl lg:text-3xl text-title">
                        提供的AGI应用
                    </div>
                    <div className=" mt-3 text-[12px]  lg:text-16px" style={{ color: '#B4BCD0', fontFamily: 'alibb-light' }}>
                        通过应用生态合作及算力中心共建运营达成生态构建目标
                    </div>




                </div>









                <div className={`lg:mt-[78px]  lg:gap-25 justify-center w-full lg:flex `} >

                    {cardData.map((item, index) => {
                        return <Card key={index} imageSrc={item.imageSrc} icon={item.icon} title={item.title} description={item.description}></Card>
                    })}


                </div>

                {/* 底部 */}
                <Footer></Footer>
            </div>

        </HeaderLayout >


    );

}
export default Home;
