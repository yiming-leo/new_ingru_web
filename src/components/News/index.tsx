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

import news1_png from '@/assets/img/news1.png'
import news2_png from '@/assets/img/news2.png'
import news3_png from '@/assets/img/news3.png'

import newsid1_png from '@/assets/img/newsid1.png'
import newsid2_png from '@/assets/img/newsid2.png'
import newsid3_png from '@/assets/img/newsid3.png'

import HeaderLayout from "@/components/Layouts/HeaderLayout";
import Image from "next/image";
import { title } from "process";
import Footer from "@/components/Footer";
import { describe } from "node:test";

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

    const NewsContent = ({ index, item }) => {
        return (
            <>
                <div className="mt-16 w-full ">
                    <div className="lg:flex   gap-8 cursor-pointer z-200  relative ">
                        <Image src={item.imageSrc} className="w-3/4 h-[120px] mx-auto  lg:w-[320px]  bg-gray-800 rounded-xl lg:h-[168px]" alt="bg" />

                        {/* <div className=" w-3/4 h-[120px] mx-auto  lg:w-[320px]  bg-gray-800 rounded-xl lg:h-[168px]   border" ></div> */}
                        <div className="flex flex-col max-w-[762px] ">
                            <div className="  mt-10 lg:mt-0 flex flex-col self-stretch px-5  text-base font-light text-violet-100 text-opacity-70  ">
                                <div className="  hover:underline  line-clamp-1 text-sm  lg:text-xl  text-white max-md:max-w-full">
                                    {item.title}
                                </div>
                                <div className="mt-2  max-md:max-w-full lg:text-16px text-[12px]" style={{ fontFamily: 'alibb-light' }}>
                                    {item.description}
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

    const newsData: any = [{ imageSrc: news1_png, icon: icon33_png, title: '隐入（浙江）科技有限公司应邀参加“环浙工大创新经济圈“ 创业兴业恳谈会成功签...', description: '隐入（浙江）科技有限公司于7月4日应邀参加了“康”企乐业“乾”图大展“环浙工大创新经济圈”创业兴业恳谈会暨半年度“人工智能+”产业链项目集中签约活动，并在此次活动中成功签约重要合作项目。彰显了公司在推动人工智能应用和行业发展方面的地位及未来发展愿景。' },
    { imageSrc: news2_png, icon: icon11_png, title: '爆火的Sora，对医疗领域会有哪些影响？', description: '北京时间2月16日凌晨，OpenAI宣布了一项重大突破：其全新研发的文生视频大模型Sora正式亮相。继文字、图片之后，全世界再一次被OpenAI震撼了。几乎没有AI制作痕迹的流畅视频，让社交媒体惊呼：现实，是不是不存在了？' },
    { imageSrc: news3_png, icon: icon22_png, title: '孙凝晖院士给正国级、副国级讲课的万字长稿发布——《人工智能与智能计算的发展》', description: '中国人大网近日刊登孙凝晖在十四届全国人大常委会专题讲座上的讲稿《人工智能与智能计算的发展》，现将全文转载如下，让我们一同走进高深莫测的人工智能世界。' }
    ]

    return (
        <HeaderLayout>
            <div className=" w-full max-w-[1440px]  items-center px-[152px] ">
                <div className="shrink-0 mt-4 h-px bg-white bg-opacity-10 " />
                <div className="mt-16 text-2xl text-white max-md:mt-10 ">
                    隐入（浙江）科技有限公司应邀参加“环浙工大创新经济圈“
                    创业兴业恳谈会成功签...
                </div>
                <div className="mt-7 text-violet-100 text-opacity-70 ">
                    更新时间：2024-02-05 10:00:00
                </div>
                <div className="mt-6 h-px border border-solid bg-slate-800 border-slate-800 " />
                <div className="mt-11 text-violet-100 text-opacity-70 max-md:mt-10 max-md:max-w-full">
                    隐入（浙江）科技有限公司于7月4日应邀参加了“康”企乐业“乾”图大展“环浙工大创新经济圈”创业兴业恳谈会暨半年度“人工智能+”产业链项目集中签约活动，并在此次活动中成功签约重要合作项目。彰显了公司在推动人工智能应用和行业发展方面的地位及未来发展愿景。
                </div>
                <Image src={newsid1_png} className=" mt-10 w-[540px]  mx-auto   " alt="bg" />
                <div className="mt-11 text-violet-100 text-opacity-70 max-md:mt-10 max-md:max-w-full">
                    7月4日，隐入（浙江）科技有限公司荣幸受邀参加了“康”企乐业“乾”图大展、“环浙工大创新经济圈”创业兴业恳谈会暨半年度“人工智能+”产业链集中签约活动。本次盛会在浙江省湖州市德清县隆重举行，吸引了众多业界精英和创新企业代表的瞩目。
                </div>
                <Image src={news1_png} className=" mt-10 w-[540px]  mx-auto    " alt="bg" />
                <div className="mt-11 text-violet-100 text-opacity-70 max-md:mt-10 max-md:max-w-full">
                    隐入科技CEO高晗在活动中发表讲话，介绍了隐入科技在推动人工智能与实体经济的深度融和中付出的努力与获得的成果，推动以科技创新助力产业升级和区域经济发展。
                    <br />
                    在本次活动中，隐入科技不仅展示了其在人工智能技术领域的前沿研究成果，还积极参与了产业合作与项目签约环节，进一步拓展了合作伙伴和市场资源。
                    <br />
                    此外，隐入科技积极响应政府号召，致力于为招纳优秀人才和促进人才引进做出贡献。在政府支持下，公司将继续加大人才引进力度，提供更多创新和创业机会，推动产业链的可持续发展。
                </div>
                <Image src={newsid2_png} className=" mt-10 w-[540px]  mx-auto " alt="bg" />
                <div className="mt-11 text-violet-100 text-opacity-70 max-md:mt-10 max-md:max-w-full">
                    未来，隐入科技将继续深耕人工智能技术，不断创新和完善智能化解决方案，为推动区域经济发展、提升产业竞争力做出更大贡献。我们期待隐入科技在人工智能领域的进一步成就，为智能科技发展贡献力量！
                </div>
                <div className="shrink-0 mt-11 h-px border border-solid bg-slate-800 border-slate-800 max-md:mt-10 max-md:max-w-full" />
                <div className="flex gap-5 px-px mt-11 ">
                    <div className="flex flex-col flex-1">
                        <div className="text-white cursor-pointer">上一篇</div>
                        {/* <div className="mt-5 text-violet-100 text-opacity-70">
                            XXXXXXXXXXXXXXXXXXXX
                        </div> */}
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="self-end text-white cursor-pointer">下一篇</div>
                        {/* <div className="mt-5 text-violet-100 text-opacity-70">
                            XXXXXXXXXXXXXXXXXXXX
                        </div> */}
                    </div>
                </div>
                <Footer></Footer>
            </div>


        </HeaderLayout >


    );

}
export default News;
