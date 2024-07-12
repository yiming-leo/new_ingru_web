import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Dropdown, Input, Space, message } from 'antd';
import axiosReq from '@/utils/req';
import { useStore } from '@/store/useStore';
import { useRouter, usePathname } from 'next/navigation';
import logo_png from '@/assets/img/logo.png';
import leftTop from '@/assets/img/leftT.png';
import scan from '@/assets/img/scan.png';
import type { MenuProps } from 'antd';
import guanbi_svg from '@/assets/svg/guanbi.svg';
import Card from "@/components/Card";

interface NavItemProps {
    href: string;
    tabName: string
}

type StatItemProps = {
    gpuModel: string;
    memory: string;
    networkStatus: string;
    power: string;
    isPrimary?: boolean;
};




const HomePage = () => {
    const router = useRouter()
    const toLogin = () => {
        router.push('/controlboard', { scroll: false })
    }
    const pathName = usePathname()

    const [showLogin, setShowLogin] = useState(false)
    const dataHeader = [
        { tabName: 'AI门户', href: '/fastexperience' },
        { tabName: '提供算力', href: '/providepower' },
        { tabName: '使用算力', href: '/computinguse' },
        { tabName: '用户手册', href: '/accountInfo' },
    ]

    const dataInfo = [
        {
            title: 'AGI快速体验',
            description: '开启AGI急速体验之门，先体验，再部署',
            buttonText: 'AI门户',
            href: '/fastexperience'
        },
        {
            title: '算力变现',
            description: '共享闲置算力，赚取算力点；加入分布式算力网络，共建高效、可持续的AI算力生态系统',
            buttonText: '算力提供',
            href: '/providepower'
        },
        {
            title: '普惠算力',
            description: '快速创建算力资源，界面化部署AI应用，低成本使用算力资源',
            buttonText: '算力使用',
            href: '/computinguse'
        },
    ]
    const NavItem: React.FC<NavItemProps> = ({ href, tabName }) => {


        const router = useRouter()


        const goLink = () => {
            if (href != '/fastexperience') {
                router.push(href, { scroll: false })
            } else {
                if (typeof window !== 'undefined') {
                    const height = window.innerHeight
                    const options: any = {
                        top: height,
                        left: 0,
                        behavior: 'smooth'
                    }
                    window.scrollTo(options)
                }
            }
        }
        return (
            <div onClick={() => {
                goLink()
            }} >
                <div style={{ fontFamily: 'alibb' }} className=" py-2 transition rounded duration-300  text-center cursor-pointer my-auto max-md:flex-wrap max-md:max-w-full hover:text-black  hover:bg-white w-34">{tabName}</div>
            </div>
        );
    }

    // 点击按钮打开登陆弹窗的函数
    const openLogin = () => {
        setShowLogin(true)
        //恢复登陆弹窗初始值
        setLoginType('scan')
        setForgetPassword(false)
        setLoginWay('phone')
        setFirstLogin(false)
    }
    // 关闭登陆弹窗
    const closeLogin = () => {
        setShowLogin(false)
    }

    const reload = () => {
        location.reload();
    }
    // 切换扫码登陆or快捷登录
    const [loginType, setLoginType] = useState('scan')
    // 扫码登陆
    const scanLogin = () => {
        setLoginType('scan')
    }
    // 快捷登录
    const quickLogin = () => {
        setLoginType('quick')
    }

    // 切换密码登陆还是手机号登陆
    const [loginWay, setLoginWay] = useState('phone')
    // 密码登陆
    const passwordLogin = () => {
        setLoginWay('password')
    }
    // 手机号登陆
    const phoneLogin = () => {
        setLoginWay('phone')
    }

    // 切换忘记密码状态
    const [forgetPassword, setForgetPassword] = useState(false)

    // 忘记密码
    const forgetPasswordFun = () => {
        setLoginType('')
        setForgetPassword(true)
    }

    // 返回密码登陆函数
    const backPassword = () => {
        setForgetPassword(false)
        setLoginType('quick')
    }

    // 首次登陆后设置密码
    const [firstLogin, setFirstLogin] = useState(false)

    // 点击登录跳转设置密码
    const setPassword = () => {
        setFirstLogin(true)
        setLoginType('')
    }


    return (
        <div className="w-full  h-screen   relative    " >
            <video autoPlay muted loop className=" h-screen absolute top-0 left-0 w-full     object-cover  -z-10" >
                <source src={require('@/assets/videos/backVideos.mp4').default} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* 居中屏幕的弹框 */}
            {showLogin && <div style={{ background: 'rgba(0, 0, 0, 0.40)' }} className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">

                <div className=' flex  '>
                    <div className="bg-white   w-w-110  rounded-lg overflow-hidden ">
                        {/* 扫码登陆 */}
                        {loginType === 'scan' && <div>
                            <div className='flex items-center'>
                                <Image onClick={quickLogin} src={leftTop} className=" cursor-pointer shrink-0 w-14 h-14  aspect-square" alt="Company Logo" />
                                <div className='  rounded-sm  w-16   px-2  bg-f0f6ff   text-formblue  text-12px '>
                                    快捷登录
                                </div>


                            </div>

                            <div className=' text-xl mt-3  flex justify-center '><span style={{ color: '#004DDC' }}>微信扫码</span><span style={{ color: '#404B63' }}>一键登录</span>


                            </div>

                            <div className=' mt-3 flex flex-col items-center   justify-center'>
                                <div className=' text-12px font-light  ' style={{ color: '#929292' }}> 未注册的微信号将自动创建账号</div>

                                <div className=' mt-4 text-12px font-light rounded-lg overflow-hidden    ' style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12)' }} >
                                    <div className='w-40 h-40 ' style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12)' }} ></div>

                                </div>
                            </div>

                            <div className=' flex justify-center items-center text-12px h-9  mt-11 w-full bottom-0 bg-slate-500' style={{ background: '#F6F7F9' }}>
                                <span style={{ color: '#929292' }}>您注册登录即代表同意</span><span>《用户服务协议》《隐私政策》</span>
                            </div>
                        </div>}

                        {/* 账户密码登陆 */}
                        {loginType === 'quick' && <div>
                            <div className="flex flex-col  ">
                                <div className="flex grow gap-2.5   ">
                                    <form className="flex flex-col grow shrink-0 items-center bg-white rounded-lg basis-0 w-fit">

                                        <div className='self-start max-w-full flex  items-center'>
                                            <Image onClick={scanLogin} src={scan} className=" cursor-pointer shrink-0 w-14 h-14  aspect-square" alt="Company Logo" />
                                            <div className='  rounded-sm  w-22   px-2  bg-f0f6ff   text-formblue  text-12px '>
                                                微信扫码登陆
                                            </div>
                                        </div>
                                        <div className="flex gap-0 mt-4 w-60 max-w-full text-xl font-bold leading-8">
                                            <div className=" flex flex-col flex-1 text-blue-700">
                                                <div onClick={phoneLogin} className="self-center cursor-pointer">快捷登录</div>
                                                <div className={` shrink-0 mt-3.5 h-px ${loginWay == 'phone' ? 'bg-blue-700' : "bg-zinc-100"} `} />
                                            </div>
                                            <div className="flex flex-col flex-1 text-slate-600">
                                                <div onClick={passwordLogin} className={`self-center cursor-pointer `}>密码登录</div>
                                                <div className={` shrink-0 mt-3.5 h-px ${loginWay == 'password' ? 'bg-blue-700' : "bg-zinc-100"} `} />
                                            </div>
                                        </div>


                                        <div className=' w-full flex flex-col justify-center items-center'>
                                            {loginWay === 'phone' && <div>
                                                <Input placeholder="输入手机号码或邮箱地址" className="mt-5 h-10 w-60 max-w-full" />
                                                <div className="flex  mt-2.5  justify-between  w-60">

                                                    <Input placeholder="输入验证码" className='w-36 h-10' />
                                                    <button className="justify-center px-3.5  text-xs   rounded  " style={{ color: '#404B63', border: '1px solid #d9d9d9' }}>
                                                        获取验证码
                                                    </button>

                                                </div>
                                                <button onClick={setPassword} className=" h-10 justify-center items-center px-16  mt-5 w-60 max-w-full text-sm font-bold leading-10 text-white bg-blue-700 rounded max-md:px-5">
                                                    登录
                                                </button>
                                                <p className="mt-3.5 text-xs leading-5 text-neutral-400   text-center">
                                                    未注册的手机号/邮箱将自动注册
                                                </p>

                                            </div>}
                                            {loginWay === 'password' && <div className=' w-full flex flex-col justify-center items-center' >
                                                <Input placeholder="输入手机号码或邮箱地址" className=" h-10 mt-5 w-60 max-w-full" />
                                                <Input placeholder="输入6-20位密码" className=" h-10  mt-2 w-60 max-w-full" />
                                                <button className=" h-10 justify-center items-center px-16  mt-5 w-60 max-w-full text-sm font-bold leading-10 text-white bg-blue-700 rounded max-md:px-5">
                                                    登录
                                                </button>
                                                <p onClick={forgetPasswordFun} className="mt-3.5 text-xs leading-5 text-neutral-400  cursor-pointer    w-60 text-right   " style={{ color: '#004DDC' }}>
                                                    忘记密码
                                                </p>


                                            </div>}

                                        </div>

                                        <div className=' flex justify-center items-center text-12px h-9  mt-11 w-full bottom-0 bg-slate-500' style={{ background: '#F6F7F9' }}>
                                            <span style={{ color: '#929292' }}>您注册登录即代表同意</span><span>《用户服务协议》《隐私政策》</span>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>}

                        {/* 首次登陆后设置密码 */}
                        {firstLogin && <div className=" flex   h-95  px-8 pt-5 pb-10 ">

                            <div className='   flex    flex-col items-center justify-center w-full'>

                                <h2 className="text-center font-bold text-xl  text-textdefault">设置密码</h2>
                                <div className="shrink-0 h-px  bg-zinc-100  mt-2 w-60" />



                                <Input placeholder="输入6-20位密码" className="mt-2 h-10 w-60 max-w-full" />
                                <Input placeholder="确认新密码" className="mt-2 h-10 w-60 max-w-full" />
                                <div className='flex mt-5 gap-3'>
                                    <button style={{ border: '1px solid #d9d9d9' }} className=" w-28   h-10  border  max-w-full text-sm font-bold leading-10  text-black rounded max-md:px-5">
                                        跳过
                                    </button>

                                    <button className=" w-28   h-10  max-w-full text-sm font-bold leading-10 text-white bg-blue-700 rounded max-md:px-5">
                                        确定
                                    </button>
                                </div>



                            </div>








                        </div>

                        }


                        {/* 重置密码 */}
                        {forgetPassword && <div className="  px-8 pt-5 pb-10 ">
                            <div className="">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/87e9bc41c61286a1fa18aa61972bf09f830146f76dde9b9cb153f1699581ca17?apiKey=fe3a31a8193d40e5b4f60783fe4cf276&"
                                    alt=""
                                    className="shrink-0 self-start aspect-square  cursor-pointer"
                                    onClick={backPassword}
                                />
                            </div>
                            <div className='  px-8 flex    flex-col items-center justify-center w-full'>

                                <h2 className="text-center font-bold text-xl  text-textdefault">重置密码</h2>
                                <div className="shrink-0 h-px  bg-zinc-100  mt-2 w-60" />
                                <Input placeholder="输入手机号码或邮箱地址" className="mt-5 h-10 w-60 max-w-full" />

                                <div className="flex  mt-2.5  justify-between  w-60">

                                    <Input placeholder="输入验证码" className='w-36 h-10' />
                                    <button className="justify-center px-3.5  text-xs   rounded  " style={{ color: '#404B63', border: '1px solid #d9d9d9' }}>
                                        获取验证码
                                    </button>

                                </div>

                                <Input placeholder="输入6-20位密码" className="mt-2 h-10 w-60 max-w-full" />
                                <Input placeholder="确认新密码" className="mt-2 h-10 w-60 max-w-full" />
                                <button className="   h-10 justify-center items-center px-16  mt-5 w-60 max-w-full text-sm font-bold leading-10 text-white bg-blue-700 rounded max-md:px-5">
                                    重置并登陆
                                </button>


                            </div>








                        </div>

                        }






                    </div>
                    <Image onClick={closeLogin} src={guanbi_svg} className=" ml-3 cursor-pointer  w-9 h-9  aspect-square" alt="Company Logo" />
                </div>
            </div>}



            <div className=" overflow-hidden  px-25  pt-8 pb-8     " >

                <header className="flex  z-0  gap-10 justify-between px-0.5   w-full text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full ">
                        <div onClick={reload} className="flex gap-2 text-4xl  items-center cursor-pointer">
                            <Image src={logo_png} className=" cursor-pointer shrink-0 w-10 h-10  aspect-square" alt="Company Logo" />
                            {/* <div className="flex-auto my-auto   font-normal  " style={{ fontFamily: 'youshe' }}>隐入科技</div> */}
                        </div>
                        <nav className="flex gap-12 justify-between my-auto text-2xl max-md:flex-wrap max-md:max-w-full ">
                            {dataHeader.map((item) => (
                                <NavItem key={item.href} href={item.href} tabName={item.tabName} />
                            ))}
                        </nav>
                    </div>
                    <div className="flex gap-5 text-2xl  items-center  relative  -right-18  h-full">

                        <div onClick={openLogin} style={{ fontFamily: 'alibb' }} className=" py-2 transition rounded duration-300  text-center cursor-pointer my-auto  text-black bg-white w-24">登陆</div>
                        {/* <div className="flex-auto my-auto">1367655...</div> */}
                        {/* <Dropdown menu={{ items: userItems }} placement="bottomRight" >
                            <Image src={myuser_svg} className=" cursor-pointer shrink-0 w-10 aspect-square" alt="User Avatar" />
                        </Dropdown> */}
                    </div>
                </header>
                <div className='' style={{ margin: 'auto' }}>
                    <div className="flex    items-end  gap-9 text-white  mt-32  ">
                        <div className=" text-8xl font-bold"  >振金</div>
                        <div className="  text-40px   leading-10  h-full "  >“人人提供算力，人人使用算力，人人实现算力自由”</div>
                    </div>
                    <div className="mt-11 text-white text-xl font-light" style={{ fontFamily: 'alibb-light' }}>
                        算力交易新生态，优化资源配置，激发闲置算力，共创算力市场繁荣，
                        <br />
                        打造算力统一大市场。
                    </div>
                    <div className="flex  gap-5  mt-15 ">
                        <button className=" w-46  border-white  border  transition duration-300   hover:text-white    hover:bg-bgblack text-2xl justify-center  py-3 text-black bg-white rounded-md max-md:px-5" onClick={() => { toLogin() }}>进入控制台</button>
                    </div>
                    <div className="px-16 py-11  mt-20  bg-white bg-opacity-20  rounded ">
                        <div className="flex gap-16  justify-between ">
                            {dataInfo.map((cardData, index) => (
                                <Card key={index} {...cardData} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage