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
import oursvg1_svg from '@/assets/svg/oursvg1.svg';
import gaohan_png from '@/assets/img/gaohan.png';
import zhangguoyan_png from '@/assets/img/zhangguoyan.png';
import yinrong_png from '@/assets/img/yinrong.png';
import ruanmingfeng_png from '@/assets/img/ruanmingfeng.png';
import yangbo_png from '@/assets/img/yangbo.png';
import taotao_png from '@/assets/img/taotao.png';
import dengchao_png from '@/assets/img/dengchao.png';
import wangyuan_png from '@/assets/img/wangyuan.png';
import xiaozhao_png from '@/assets/img/xiaozhao.png'
import liujie_png from '@/assets/img/liujie.png'
import xiaoyu_png from '@/assets/img/xiaoyu.png'
import xiaoliao_png from '@/assets/img/xiaoliao.png'

import HeaderLayout from "@/components/Layouts/HeaderLayout";
import Image from "next/image";
import { title } from "process";
import Footer from "@/components/Footer";

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

    const cardData: any = [{ imageSrc: safe_png, icon: icon33_png, title: 'DeKnow', description: '新一代内容平台，利用大模型实现结构化内容输出' },
    { imageSrc: agentNet_png, icon: icon11_png, title: 'AgentNet', description: '智能体网络，分布式多智能体即服务，系统Agent智能编排调控' },
    { imageSrc: LMCloud_png, icon: icon22_png, title: 'LM Cloud', description: '大模型云平台，规模化、标准化、高效能的生成式AGI计算基础设施' }
    ]




    const MemberContent = ({ name, des, img }) => {
        return (
            <div className=" flex items-center gap-5 mt-15 lg:mt-0">

                <Image src={img} className="w-[100px] h-[100px]   rounded-[50%]  " alt=" " />
                <div className="w-73 flex flex-col justify-center  h-25 gap-2 lg:w-[280px] ">
                    <div className=" text-white">
                        {name}
                    </div>
                    <div className=" text-[14px] " style={{ color: 'rgba(239, 237, 253, 0.70)', fontFamily: 'alibb-light' }}>
                        {des}
                    </div>
                </div>
            </div>
        )
    }



    return (
        <HeaderLayout>
            <div className=" w-full max-w-[1440px] flex flex-col  items-center  ">
                <div className="w-full max-w-[1440px] flex flex-col  items-center lg:px-[100px]  px-[25px] ">

                    <div className="flex flex-col  items-center relative">
                        <Image src={bg_png} className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rotate-12    lg:w-[872px]  lg:h-[731px] " alt="bg" />

                        <div className=" mt-10 lg:mt-34 w-64 h-9  rounded-3xl  flex  items-center px-5 " style={{ background: 'linear-gradient(90deg, rgba(222, 151, 247, 0.24) 0%, rgba(178, 148, 245, 0.24) 50%, rgba(155, 177, 253, 0.24) 100%)' }}>
                            <Image src={star_png} className=" w-8  h-6" alt="bg" />
                            <div className=" text-sm  text-test" >构建算力生态，引领算力市场</div>
                        </div>
                        <div className=" mt-6 text-titleColor text-xl lg:text-5xl">以价值创造价值，以梦想成就梦想</div>
                        <div className=" mt-6 text-titleColor   text-[12px]  lg:text-16px" style={{ color: '#B4BCD0', fontFamily: 'alibb-light' }}  >AGI问题发现者，算力市场创新者，迎接绿色，人本的 AI 时代</div>

                        <div className=" mt-15 ">
                            <Image src={text_png} className="   w-70  lg:w-115   h-20" alt="bg" />
                        </div>
                        <div className=" mt-10 lg:mt-59  w-4/5" style={{ height: '1px', background: ' linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}></div>
                    </div>


                    <div className=" mt-15  lg:mt-25 w-full text-center ">
                        <div className="text-2xl lg:text-3xl text-title">
                            我们的企业
                        </div>

                        <div className="  lg:flex lg:gap-[142px] mt-[40px] lg:mt-[80px]" >
                            <div className=" ">
                                <div className=" w-full lg:w-[524px] lg:h-[106px] text-start  " style={{ fontFamily: 'alibb-light', color: '#F7F8F8;' }}>

                                    <span className=" text-[16px]  lg:text-[36px] yinrutext" style={{ fontFamily: 'alibb' }}>隐入</span>
                                    <span className=" text-[12px] lg:text-[16px]" style={{ fontFamily: 'alibb-light', color: '#F7F8F8' }}>科技，一家以创新为驱动力的先锋企业，我们以&quot;以价值成就价值，以梦想实现价值&quot;的核心价值观为行动指南，致力于引领我们进入一个绿色、以人为本的人工智能新时代，作为人工智能通用问题（AGI）的探索者和算力市场的创新引领者，我们不断追求技术与市场的和谐共鸣。</span>
                                </div>
                                {!isPC && <div className=" my-6">
                                    <Image src={ourbg1_png} className="w-full  lg:w-[536px] lg:h-[300px]   " alt="bg" />
                                </div>}
                                <div className=" lg:w-[525px] py-5 mt-5 rounded-md" style={{ border: '1px solid #313035', background: '#272E3C' }}>
                                    <div className=" flex  items-baseline  px-5  gap-2">

                                        <Image src={oursvg1_svg} className="lg:w-[16px] lg:h-[16px]  w-[12px] h-[12px]  " alt="bg" />

                                        <div className=" text-start text-12px lg:text-16px" style={{ color: 'rgba(239, 237, 253, 0.70)', fontFamily: 'alibb-light' }}>
                                            基于对算力作为未来技术发展基石的深刻理解，我们以算力市场平台为核心，汇聚算力资源，紧随AGI技术的发展步伐，我们通过创新性的产品组合，不断实现产品的创建和迭代，为用户提供高效、智能、安全的算力资源服务。
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isPC && <div>
                                <Image src={ourbg1_png} className="w-full  lg:w-[536px] lg:h-[300px]   " alt="bg" />
                            </div>}


                        </div>




                    </div>

                    <div className="  mt-20  lg:mt-35 w-full lg:w-[864px] h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}></div>



                    <div className="  mt-10 lg:mt-28">

                        <div className="text-2xl lg:text-3xl text-title">
                            我们的团队
                        </div>
                    </div>


                    <div className=" mt-5 lg:mt-15">

                        <div className=" text-12px  lg:text-16px leading-6" style={{ color: '#EFEDFD', fontFamily: 'alibb-light' }}>
                            我们的团队由具有丰富技术背景和创业经验的成员组成，涵盖云计算、人工智能、大数据、企业架构及风险管理等领域。核心团队长期致力于高效、低成本算力平台的研究与开发，已成功构建了一个能够整合分布式算力资源的高效网络，致力于解决传统算力中心化带来的高成本和资源浪费问题。
                        </div>
                    </div>
                    <div className=" mt-[30px] lg:mt-[60px] h-[1px]  w-full " style={{ border: '1px solid #2A2D44' }}> </div>



                    <div className="lg:flex gap-5    lg:mt-15">
                        <MemberContent name={'高晗 创始人兼CEO'} des={'资深人工智能领域投资人、绿地素本合伙人'} img={gaohan_png}></MemberContent>
                        <MemberContent name={' 尹荣 创始人兼CTO'} des={'大数据、人工智能、企业架构和风险管理领域专家，前IBM、德勤、华为高级技术与管理专家'} img={yinrong_png}></MemberContent>


                    </div>
                    <div className="lg:flex gap-5 lg:mt-19">

                        <MemberContent name={'张国艳 董事兼CFO'} des={'前P&G销售总监，绿地素本创始人兼CEO'} img={zhangguoyan_png}></MemberContent>
                        <MemberContent name={'阮明烽 独立董事兼CFA'} des={'浙江工业大学金融系创办人、MBA导师，金融专家、投资专家'} img={ruanmingfeng_png}></MemberContent>

                    </div>

                    <div className=" lg:mt-18  lg:flex  gap-5 ">
                        <MemberContent name={'杨波 Senior Engineer'} des={'产业大数据、互联网医疗、人工智能项目架构专家，前浙江智慧网络医疗、优健康、火石创造技术总监'} img={yangbo_png}></MemberContent>
                        <MemberContent name={'陶涛 Senior Engineer'} des={'药理学硕士、丰富医学知识背景、优秀的软件开发者和生信工程师，前同花顺医学部大数据分析师和项目专员'} img={taotao_png}></MemberContent>
                        <MemberContent name={'邓超 Project Manager'} des={'韩国游戏工程学硕士，生成式人工智能（AGI）、扩展现实（XR）人机交互产品专家'} img={dengchao_png}></MemberContent>

                    </div>

                    <div className=" lg:mt-18  lg:flex gap-5">
                        <MemberContent name={'王元 Senior Engineer'} des={'工学硕士，前恒生电子区块链高级工程师，在联盟链、交易所、DeFi等领域深耕多年，Web3开源社区贡献者'} img={wangyuan_png}></MemberContent>
                        <MemberContent name={'赵生宁 AI Engineer'} des={''} img={xiaozhao_png}></MemberContent>
                        <MemberContent name={'刘杰 Frontend Engineer'} des={''} img={liujie_png}></MemberContent>
                    </div>
                    <div className=" lg:mt-18  lg:flex gap-5  justify-start w-full">
                        <MemberContent name={'邹茜羽 Blockchain Engineer'} des={''} img={xiaoyu_png}></MemberContent>
                        <MemberContent name={'廖一鸣 AI Engineer'} des={''} img={xiaoliao_png}></MemberContent>


                    </div>

                </div>
                {/* 底部 */}

                <Footer></Footer>
            </div>


        </HeaderLayout >


    );

}
export default Aboutus;
