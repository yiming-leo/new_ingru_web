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
import news1_png from '@/assets/img/news1.png'
import news2_png from '@/assets/img/news2.png'
import news3_png from '@/assets/img/news3.png'

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
  const router = useRouter()
  const toNewsContent = (id) => {
    const nextNum = Number(id) + 1

    router.push(`/news/newsdetail/${nextNum}/`)
  }

  const NewsCard = ({ index, imageSrc, icon, title, description }) => {
    console.log(index, 'iiidd')
    return (
      <div className=" flex-1 lg:w-[380px] mt-10 lg:mt-0 cursor-pointer " onClick={() => toNewsContent(index)} >
        <Image src={imageSrc} className=" h-[200px]  " alt="bg" />
        {/* <div className=" h-[200px] border" /> */}
        <div className="mt-5">
          <div className="flex items-center gap-[10px]">
            <div className="text-white  text-sm  lg:text-xl hover:underline  line-clamp-1">{title}</div>
          </div>
          <div className="mt-3   text-[12px]   lg:text-16px w-full    font-light  line-clamp-2  text-justify break-all " style={{ color: 'rgba(239, 237, 253, 0.70)', fontFamily: 'alibb-light', }}>
            {description}
          </div>
        </div>
      </div>
    );
  };

  const newsData: any = [{ imageSrc: news1_png, icon: icon33_png, title: '隐入（浙江）科技有限公司应邀参加“环浙工大创新经济圈“ 创业兴业恳谈会成功签...', description: '隐入（浙江）科技有限公司于7月4日应邀参加了“康”企乐业“乾”图大展“环浙工大创新经济圈”创业兴业恳谈会暨半年度“人工智能+”产业链项目集中签约活动，并在此次活动中成功签约重要合作项目。彰显了公司在推动人工智能应用和行业发展方面的地位及未来发展愿景。' },
  { imageSrc: news2_png, icon: icon11_png, title: '爆火的Sora，对医疗领域会有哪些影响？', description: '北京时间2月16日凌晨，OpenAI宣布了一项重大突破：其全新研发的文生视频大模型Sora正式亮相。继...' },
  { imageSrc: news3_png, icon: icon22_png, title: '孙凝晖院士给正国级、副国级讲课的万字长稿发布——《人工智能与智能计算的发展》', description: '中国人大网近日刊登孙凝晖在十四届全国人大常委会专题讲座上的讲稿《人工智能与智能计算的发展》，现...' }
  ]

  return (
    <HeaderLayout>

      <div className=" w-full max-w-[1920px] flex flex-col  items-center  ">

        <div className="flex flex-col  items-center relative">
          <Image src={bg_png} className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rotate-12    lg:w-[872px]  lg:h-[731px] " alt="bg" />

          <div className=" mt-10 lg:mt-34 w-64 h-9  rounded-3xl  flex  items-center px-5 " style={{ background: 'linear-gradient(90deg, rgba(222, 151, 247, 0.24) 0%, rgba(178, 148, 245, 0.24) 50%, rgba(155, 177, 253, 0.24) 100%)' }}>
            <Image src={star_png} className=" w-8  h-6" alt="bg" />
            <div className=" text-sm  text-test" >构建算力生态，引领算力市场</div>
          </div>
          <div className=" mt-6 text-titleColor text-xl lg:text-5xl">以价值创造价值，以梦想成就梦想</div>
          <div className=" mt-6 text-titleColor   text-[12px]  lg:text-16px" style={{ color: '#B4BCD0', fontFamily: 'alibb-light' }}  >迎接绿色，人本的 AI 时代，AGI问题发现者，算力市场创新者</div>
          <div className=" mt-15 ">
            <Image src={text_png} className="   w-70  lg:w-115   h-20" alt="bg" />
          </div>
          <div className=" mt-10 lg:mt-59  w-4/5" style={{ height: '1px', background: ' linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}></div>
        </div>
        <div className=" px-4  mt-25  w-40 h-9 rounded-2xl  flex items-center gap-1  " style={{ border: '1px solid #7877C6' }}>
          <Image src={arrows_png} className=" w-5  h-5" alt="bg" />
          <div className=" text-[16px] text-white">SL产品生态链</div>

        </div>

        <div className=" mt-10 w-full text-center ">
          <div className="text-2xl lg:text-3xl text-title">
            多模态产品平台
          </div>
          <div className="text-2xl lg:text-3xl text-title">
            一键生成一键部署
          </div>
        </div>

        <Image src={camera_png} className=" mt-20  w-80   h-39" alt="bg" />

        <div className=" mt-6 flex  gap-4  justify-center flex-col   w-65   items-start">
          <div className=" flex gap-2 items-center justify-center  w-full lg:justify-start">


            <Image src={shandian_png} className=" w-4 h-4" alt="bg" />
            <div className=" text-white text-xl">算力交易平台</div>
          </div>
          <div className=" w-70 text-16px  font-thin " style={{ color: 'rgba(239, 237, 253, 0.70)', fontFamily: 'alibb-light' }}>
            共享闲置算力，赚取算力点，加入分布式算力网络，共建高效
          </div>
        </div>
        {isPC && <div className=" mt-25" >
          <div className=" h-[1px] w-50 transform  rotate-90 relative" style={{ background: '   linear-gradient(90deg, rgba(61, 65, 97, 0.00) 0%, rgba(61, 65, 97, 0.45) 20%, #3D4161 50%, rgba(61, 65, 97, 0.41) 79.5%, rgba(61, 65, 97, 0.00) 100%)' }}>
            <div className="  absolute top-1/2 left-1/2 transform  rotate-90 -translate-x-1/2 -translate-y-1/2  w-[844px] h-[1px] " style={{ background: '#3D4161' }}>
              <div className=" absolute -right-[50px]  -top-[50px] w-25 h-[1px] transform  rotate-90 z-20" style={{ background: '   linear-gradient(90deg, rgba(61, 65, 97, 0.00) 0%, rgba(61, 65, 97, 0.45) 20%, #3D4161 50%, rgba(61, 65, 97, 0.41) 79.5%, rgba(61, 65, 97, 0.00) 100%)' }}></div>
              <div className=" absolute -left-[50px]  -top-[50px] w-25 h-[1px] transform  rotate-90 z-20" style={{ background: '   linear-gradient(90deg, rgba(61, 65, 97, 0.00) 0%, rgba(61, 65, 97, 0.45) 20%, #3D4161 50%, rgba(61, 65, 97, 0.41) 79.5%, rgba(61, 65, 97, 0.00) 100%)' }}></div>
            </div>
          </div>

        </div>}

        {!isPC && <div className="w-[1px] h-[100px]  mt-5" style={{ background: ' linear-gradient(90deg, rgba(61, 65, 97, 0.00) 0%, rgba(61, 65, 97, 0.45) 20%, #3D4161 50%, rgba(61, 65, 97, 0.41) 79.5%, rgba(61, 65, 97, 0.00) 100%)' }}></div>}
        <div className={`lg:mt-[100px]  lg:gap-25 justify-center w-full lg:flex `} >
          {cardData.map((item, index) => {
            return <Card key={index} imageSrc={item.imageSrc} icon={item.icon} title={item.title} description={item.description}></Card>
          })}


        </div>
        <div className="  mt-20  lg:mt-67 w-full lg:w-[864px] h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(42, 45, 68, 0.00) 0%, #2A2D44 50%, rgba(42, 45, 68, 0.00) 100%)' }}></div>
        <div className=" px-4    mt-15 lg:mt-29  w-40 h-9 rounded-2xl  flex items-center gap-1  " style={{ border: '1px solid #7877C6' }}>
          <Image src={arrows_png} className=" w-5  h-5" alt="bg" />
          <div className=" text-[16px] text-white">产业规模前景</div>

        </div>

        <div className=" mt-5 w-full text-center ">
          <div className=" text-2xl  lg:text-3xl text-title">
            构建一个可持续发展的
          </div>
          <div className=" text-2xl lg:text-3xl text-title">
            行业生态系统
          </div>
        </div>



        {/* 圆圈内容区域 */}
        <div className="  mt-[154px]  ">
          <div className="  w-screen max-w-[1440px] max-h-[1440px]  lg:h-[100vw] h-[100vw] relative  " style={{ borderRadius: '50%', background: 'linear-gradient(180deg, #000212 36.97%, #222555 200%)', boxShadow: '0px 4px 200px 0px rgba(120, 119, 198, 0.40)' }}>
            <Image src={bg2_png} className=" w-[180px] h-[180px]  lg:w-[389px] lg:h-[433px] absolute  -top-30 left-1/2 transform -translate-x-1/2 rotate-180 " alt="bg" />
            <div className="  pt-10  sm:pt-60  lg:pt-80 w-full  ">
              <div className=" px-15 lg:px-[320px] w-full">
                <div className=" text-[25px]  lg:text-[40px] text-p leading-[50px]  text-right lg:px-40">
                  &gt;7000P
                </div>
                <div className=" flex justify-between mt-3">

                  <div style={{ color: '#E8EAED' }} className=" text-xl">初始阶段</div>
                  <div style={{ color: '#E8EAED' }} className=" text-xl">生态阶段</div>

                </div>
                <div className="  w-full h-[2px] mt-5 relative" style={{ background: 'repeating-linear-gradient(to right,  #3D4161  , #3D4161  5px, transparent  5px, transparent 10px)' }}>

                </div>
                <div className=" flex justify-between mt-5">

                  <div style={{ color: '#9AA0A6' }} className=" text-sm">算力交易市场</div>
                  <div style={{ color: '#9AA0A6' }} className=" text-sm">生态大融合</div>

                </div>
                <div className="  lg:px-40 relative">
                  <Image src={beacon_png} className=" w-[220px] lg:w-[450px] h-[100px]  lg:h-50 z-10 transform  -rotate-[25deg]  lg:-rotate-[10deg] absolute top-[-100px] lg:top-[-180px] " alt="bg" />
                  <div className=" mt-5 lg:mt-29 text-[25px] lg:text-[40px] text-p leading-[50px]  text-right   w-20 ">10P</div>
                </div>
              </div>

              <div className=" relative flex justify-center">
                <Image src={star2_png} className="  w-[300px]  lg:w-[1200px]  lg:h-[300px]     " alt="bg" />
                <div className="desc text-sm lg:h-20  lg:w-[420px] w-[250px]  absolute lg:left-1/2   lg:top-1/4  ">“振金”算力交易平台为客户提供的价值在于其高效、低成本的算力服务，以及易于接入和使用的AI技术体验。用户可以轻松地在我们的平台上找到所需的算力资源，无需大量前期投资即可快速部署和扩展其计算需求。</div>

              </div>

              {isPC && <div className=" px-25  mt-40  ">
                <div className=" text-center text-4xl newsTitle">新闻中心</div>

                <div className="flex  mt-15  gap-13 justify-center">

                  {newsData.map((item, index) => {
                    return <NewsCard index={index} key={index} imageSrc={item.imageSrc} icon={item.icon} title={item.title} description={item.description}></NewsCard>
                  })}
                </div>

              </div>}



            </div>
          </div>
        </div>
        {!isPC && <div className=" px-8  mt-20  ">
          <div className=" text-center text-3xl  newsTitle">新闻中心</div>

          <div className="  mt-10  gap-13 justify-center">

            {newsData.map((item, index) => {
              return <NewsCard index={index} key={index} imageSrc={item.imageSrc} icon={item.icon} title={item.title} description={item.description}></NewsCard>
            })}
          </div>

        </div>}

        {/* 底部 */}

        <Footer></Footer>
      </div>

    </HeaderLayout >


  );

}
export default Home;
