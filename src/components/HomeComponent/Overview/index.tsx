import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Dropdown, Space, message } from 'antd';
import axiosReq from '@/utils/req';
import { useStore } from '@/store/useStore';
import { useRouter, usePathname } from 'next/navigation';
import HomeTitle from "@/components/HomeTitle";
import power1 from '@/assets/svg/power1.svg'
import power2 from '@/assets/svg/power2.svg'
import power3 from '@/assets/svg/power3.svg'
import Map from '@/components/Map';
import { data } from '@/app/controlboard/column';



const FastExperience = () => {
    const dataList = [{ "name": "北京", "value": 2000, }, { "name": "福建", "value": 4000, }]
    const dataList2 = [{ "name": "重庆", "value": 2000, }, { "name": "黑龙江", "value": 4000, }]
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




    useEffect(() => {

    }, [])

    return (
        <div className=" px-40 py-25   h-screen  bg-white " >
            <div className=' text-black text-4xl w-full text-center'>
                算力概览
            </div>
            <div className=' mt-5 text-xl  text-textdefault   font-light w-full  text-center'>
                使用统计&地理分布
            </div>

            <div className=' mt-18 flex justify-center   gap-8'>
                <div className=' w-125 h-22 rounded-md px-8 py-5 flex items-center gap-5' style={{ border: '1px solid #D9D9D9' }}>
                    <Image loading="lazy" src={power1} alt="" className="shrink-0 aspect-square w-12 h-12" />
                    <div className=' text-2xl text-textdefault font-light'>AI应用体验次数</div>
                    <div className=' text-black  text-5xl'>364124</div>
                </div>
                <div className=' w-125 h-22 rounded-md px-8 py-5 flex items-center gap-5' style={{ border: '1px solid #D9D9D9' }}>
                    <Image loading="lazy" src={power2} alt="" className="shrink-0 aspect-square w-12 h-12" />
                    <div className=' text-2xl text-textdefault font-light'>算力提供数量</div>
                    <div className=' text-black  text-5xl'>364124</div>
                </div>
                <div className=' w-125 h-22 rounded-md px-8 py-5 flex items-center gap-5' style={{ border: '1px solid #D9D9D9' }}>
                    <Image loading="lazy" src={power3} alt="" className="shrink-0 aspect-square w-12 h-12" />
                    <div className=' text-2xl text-textdefault font-light'>算力使用数量</div>
                    <div className=' text-black  text-5xl'>364124</div>
                </div>


            </div>
            <div className='mt-30'>
                <Map data={dataList} data2={dataList2} />
            </div>


            {/* <div className='mt-30 w-full'>
                <Map data={dataList} />
            </div> */}



        </div>
    )
}

export default FastExperience