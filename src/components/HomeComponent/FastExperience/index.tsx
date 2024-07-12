import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Dropdown, Space, message } from 'antd';
import axiosReq from '@/utils/req';
import { useStore } from '@/store/useStore';
import { useRouter, usePathname } from 'next/navigation';
import HomeTitle from "@/components/HomeTitle";
import image1 from '@/assets/img/image1.png'
import image2 from '@/assets/img/image2.png'
import image3 from '@/assets/img/image3.png'

import icon1 from '@/assets/img/icon1.png'
import icon2 from '@/assets/img/icon2.png'
import icon3 from '@/assets/img/icon3.png'

const FastExperience = () => {

    const router = useRouter()
    const pathName = usePathname()
    const CardExperience: React.FC<any> = ({ imgSrc, altText, iconSrc, title, description, appScenario, link }) => {

        const [right, setRight] = useState<string>('0px')
        const gofast = () => {
            window.open(link);
        }

        const [cardITitle, setCardTitle] = useState()
        const handleMouseEnter = () => {
            setRight('-10px')
        };
        const handleMouseLeave = () => {
            setRight('0px')
        };



        return (
            <article
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ fontFamily: 'albb' }} onClick={() => {
                    gofast()
                }} className=" cursor-pointer  HomeCard-style flex flex-col grow pb-6 w-full text-xl text-gray-600 bg-white rounded-xl max-md:mt-10 max-md:max-w-full">
                <Image loading="lazy" src={imgSrc} alt={altText} className="w-full aspect-[1.79] max-md:max-w-full" />
                <div className="flex flex-col px-10 mt-8 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-2.5 self-start font-semibold whitespace-nowrap ">
                        <Image loading="lazy" src={iconSrc} alt="" className="shrink-0 aspect-square  w-8 h-8" />
                        <div style={{ fontFamily: 'albb' }} className="my-auto  text-textdefault">{title}</div>
                    </div>
                    <div className="mt-6  text-xl" style={{ fontFamily: 'albb', color: '#5F6368', fontWeight: '400' }}> {description}</div>
                    <div className="mt-7 font-light text-xl h-14" style={{ color: '#5F6368', fontFamily: 'albb' }} >{appScenario}</div>
                    <div className="flex   gap-3 self-end mt-5 cursor-pointer text-blue-600 whitespace-nowrap">
                        <div className="" style={{ color: '#1A73E8' }} >快速体验</div>
                        <img style={{
                            transition: 'all .2s',
                            right: right
                        }} className="shrink-0 w-5 relative aspect-[1.11] fill-blue-600 " loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a0a0704520203804eccd54dfdc827fe5a2fa94150938eceb7774fc90a4a8d06?apiKey=fe3a31a8193d40e5b4f60783fe4cf276&" alt="" />
                    </div>
                </div>
            </article>
        );
    }


    const cardData = useMemo(() => {
        return [
            {
                imgSrc: image1,
                altText: "Stable Diffusion XL illustration",
                iconSrc: icon1,
                title: "stable-diffusion",
                description: "Stable Diffusion XL 能够生成几乎任何艺术风格的高质量图像，是用来生成写实图像的最佳开放模型。",
                appScenario: "支持的应用场景：广告和营销、媒体和娱乐、游戏和元宇宙。",
                link: 'http://192.168.1.156:7861/'
            },
            {
                imgSrc: image2,
                altText: "sd-comfyui illustration",
                iconSrc: icon2,
                title: "sd-comfyui",
                description: "使用基于图形、节点及流程图的界面设计实现无需编写任何代码即可试验和创建复杂的 Stable Diffusion 工作流程。",
                appScenario: "强大和模块化的稳定扩散 GUI 和后端",
                link: 'http://192.168.1.157:8188/',
            },
            {
                imgSrc: image3,
                altText: "隐入智能体 illustration",
                iconSrc: icon3,
                title: "隐入智能体",
                description: "基于 LLM 大模型的开源 AI 知识库构建应用，提供了开箱即用的数据处理、模型调用、可视化 AI 工作流编排等能力。",
                appScenario: "让AI更懂您的知识",
                link: 'https://hn-applet.ihealer.cn:3443/chat/share?shareId=gjqe8bbkzm3yhtmc1n9pal2m'
            }
        ];

    }, [])

    useEffect(() => {

    }, [])

    return (
        <div className=" px-40 py-25   h-screen  bg-white " >
            <section className="flex flex-col">
                <header className="   ">
                    <div className="flex gap-6    items-center self-start  whitespace-nowrap max-md:flex-wrap">

                        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc6db5380e69120d31ee77dfb32fa144c75feca99412c84ca91c54146b37eff?apiKey=fe3a31a8193d40e5b4f60783fe4cf276&" alt="" className="shrink-0 self-stretch my-auto w-3.5 aspect-[0.47] fill-blue-600" /> */}
                        <h1 className="  text-black font-bold   text-4xl">AI应用快速体验</h1>
                        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05ef8e582a834453309605527c27d8a4bd2c5cb539b2c49a1cbf72ba1f153b3?apiKey=fe3a31a8193d40e5b4f60783fe4cf276&" alt="" className="shrink-0 self-stretch my-auto w-3.5 aspect-[0.47] fill-blue-600" /> */}
                        <HomeTitle></HomeTitle>
                    </div>
                    <div className="flex gap-5 relative    mt-5 text-xl max-md:flex-wrap max-md:max-w-full">
                        <p className="font-light  text-xl" style={{ color: '#5F6368' }}>预装环境，一键部署，无需运维，热门主流大模型 AI 程序快速升级，先体验，再部署</p>
                        <Link href={'/providepower'} style={{ color: '#0061F2' }} className=" absolute right-0 cursor-pointer ">为此应用提供算力</Link>
                    </div>

                </header>
                <main className="homePage    mt-18 w-full rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-ful ">
                    <div className="flex gap-12 ">
                        {cardData.map((card, index) => (
                            <div key={index} className="  box-border overflow-hidden flex flex-col w-[33%] max-md:ml-0 max-md:w-full">

                                <CardExperience

                                    imgSrc={card.imgSrc}
                                    altText={card.altText}
                                    iconSrc={card.iconSrc}
                                    title={card.title}
                                    description={card.description}
                                    appScenario={card.appScenario}
                                    link={card.link}

                                />
                            </div>
                        ))}
                    </div>
                </main>
            </section>


        </div>
    )
}

export default FastExperience