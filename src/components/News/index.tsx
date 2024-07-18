"use client"
import React, { useEffect, useMemo, useState } from "react";
import { Descriptions, message } from 'antd';


import HeaderLayout from "@/components/Layouts/HeaderLayout";

import newsId2 from "./newscontent2";

import newsId1 from "./newscontent1";
import newsId3 from "./newscontent3";
import Footer from "@/components/Footer";
import { useRouter, usePathname } from 'next/navigation';

const News: React.FC = ({ id }) => {


    const router = useRouter()

    const [newsdetail, setNewsDetail] = useState('')
    const [currentNumber, setCurrentNumber] = useState(1);
    const [title, setTitle] = useState({})

    useEffect(() => {
        if (id == 1) {
            setNewsDetail(newsId1)
            setTitle({ next: '孙凝晖院士给正国级、副国级讲课的万字长稿发布——《人工智能与智能计算的发展》', })
        }
        if (id == 2) {
            setNewsDetail(newsId2)
            setTitle({ next: '爆火的Sora，对医疗领域会有哪些影响？', last: '隐入（浙江）科技有限公司应邀参加“环浙工大创新经济圈“ 创业兴业恳谈会成功签约项目' })
        }
        if (id == 3) {
            setNewsDetail(newsId3)
            setTitle({ last: '孙凝晖院士给正国级、副国级讲课的万字长稿发布——《人工智能与智能计算的发展》', })
        }

    }, [])

    const lastPage = () => {
        if (id == 1) {
            message.warning('已经是第一篇了')
        } else {
            let nextNumber = id - 1;
            router.push(`/news/newsdetail/${nextNumber}/`)
        }
    }

    const nextPage = () => {
        if (id == 3) {
            message.warning('已经是最后一篇了')
        } else {
            let nextNumber = +id + 1;
            router.push(`/news/newsdetail/${nextNumber}/`)
        }
    }



    return (
        <HeaderLayout>
            <div className=" ">
                <div className="w-full max-w-[1440px]  items-center  px-[20px] lg:px-[152px]">
                    <div dangerouslySetInnerHTML={{ __html: newsdetail }} className="rich-text  mt-20 " />
                    <div className="shrink-0 mt-11 h-px border border-solid bg-slate-800 border-slate-800 max-md:mt-10 max-md:max-w-full" />
                    <div className="flex gap-5 px-px mt-11 ">
                        <div className="flex flex-col flex-1">
                            {id != 1 && <div className="text-white cursor-pointer  text-[14px]" onClick={lastPage}>上一篇</div>}
                            {id != 1 && <div className="text-white cursor-pointer text-12px hover:underline line-clamp-1" onClick={lastPage}>{title?.last}</div>}
                        </div>
                        <div className="flex flex-col flex-1">
                            {id != 3 && <div className="self-end text-white cursor-pointer text-[14px]" onClick={nextPage}>下一篇</div>}
                            {id != 3 && <div className="self-end text-white cursor-pointer text-12px  hover:underline line-clamp-1" onClick={nextPage}>{title?.next}</div>}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </HeaderLayout >


    );

}
export default News;
