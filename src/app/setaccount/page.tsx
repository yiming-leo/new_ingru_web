'use client'
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Dropdown, Input, Modal, Space, message } from 'antd';
import axiosReq from '@/utils/req';
import { useStore } from '@/store/useStore';

import DefaultLayout from '@/components/Layouts/DefaultLayout';
import lock from '@/assets/svg/lock.svg';
import email from '@/assets/svg/email.svg';
import phone from '@/assets/svg/phone.svg';
import vx from '@/assets/svg/vx.svg';
import vx_green from '@/assets/svg/vx_green.svg';
import x_svg from '@/assets/svg/x.svg';
import userCard from '@/assets/svg/userCard.svg';
import ButtonLink from '@/components/ButtonLink';


const Setaccount = () => {


    useEffect(() => {

    }, [])
    // 弹框开关变凉
    const [isModalVisible, setIsModalVisible] = useState(false);
    // 弹框类型
    const [modalType, setModalType] = useState('')

    const openModal = (type: string) => {
        setModalType(type)
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };




    return (
        <>
            {/* 弹框 */}
            {/* 更换密码 */}
            {isModalVisible && modalType == 'password' &&
                <div style={{ background: 'rgba(0, 0, 0, 0.40)' }} className="absolute top-0 left-0  w-screen h-screen flex justify-center items-center z-50">
                    <div className=' px-8 pt-8 pb-4  bg-white w-96  rounded  ' style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)' }}>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 '>
                                <Image src={lock} className=" cursor-pointer shrink-0  w-5  aspect-square" alt="Company Logo" />
                                <div className=' text-textdefault font-bold text-xl'>设置密码</div>

                            </div>
                            <Image onClick={handleCancel} src={x_svg} className=" cursor-pointer shrink-0  w-3  aspect-square" alt="Company Logo" />
                        </div>
                        <div className=' flex flex-col justify-center items-center '>
                            <Input placeholder="当前密码" className="mt-5 h-10  w-75 max-w-full" />
                            <Input placeholder="新密码" className="mt-5 h-10  w-75 max-w-full" />
                            <Input placeholder="确定新密码" className="mt-5 h-10  w-75 max-w-full" />
                        </div>

                        <div className="flex   mt-8 flex-1 gap-2 whitespace-nowrap text-textdefault justify-end">
                            <ButtonLink onClick={handleCancel} type='button' defaultColor='#404b63' className="  text-center  leading-9  justify-center h-9 w-22 rounded-md border border-solid border-zinc-300 max-md:px-5">
                                取消
                            </ButtonLink>
                            <button className={`cursor-pointer h-9 justify-center w-22  text-white rounded-md   bg-gradient-to-r  hover:from-hoverblue  hover:to-toblue   from-formblue   to-toblue`}   >
                                确定
                            </button>
                        </div>

                    </div>

                </div>}

            {/* 邮箱绑定 */}
            {isModalVisible && modalType == 'email' &&
                <div style={{ background: 'rgba(0, 0, 0, 0.40)' }} className="absolute top-0 left-0  w-screen h-screen flex justify-center items-center z-50">
                    <div className=' px-8 pt-8 pb-4  bg-white w-96  rounded  ' style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)' }}>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 '>
                                <Image src={email} className=" cursor-pointer shrink-0  w-5  aspect-square" alt="Company Logo" />
                                <div className=' text-textdefault font-bold text-xl'>邮箱绑定</div>

                            </div>
                            <Image onClick={handleCancel} src={x_svg} className=" cursor-pointer shrink-0  w-3  aspect-square" alt="Company Logo" />
                        </div>
                        <div className=' flex flex-col justify-center items-center '>
                            <Input placeholder="请输入即将绑定的邮箱地址" className="mt-5 h-10  w-75 max-w-full" />

                            <div className="flex  mt-2.5  w-75 justify-between gap-2  ">

                                <Input placeholder="输入验证码" className=' w-50 h-10' />
                                <button className="justify-center px-3  w-22 text-xs   rounded  " style={{ color: '#404B63', border: '1px solid #d9d9d9' }}>
                                    获取验证码
                                </button>

                            </div>
                        </div>

                        <div className="flex   mt-8 flex-1 gap-2 whitespace-nowrap text-textdefault justify-end">
                            <ButtonLink onClick={handleCancel} type='button' defaultColor='#404b63' className="  text-center  leading-9  justify-center h-9 w-22 rounded-md border border-solid border-zinc-300 max-md:px-5">
                                取消
                            </ButtonLink>
                            <button className={`cursor-pointer h-9 justify-center w-22  text-white rounded-md   bg-gradient-to-r  hover:from-hoverblue  hover:to-toblue   from-formblue   to-toblue`}   >
                                确定
                            </button>
                        </div>

                    </div>

                </div>}


            {/* 手机号绑定 */}
            {isModalVisible && modalType == 'phone' &&
                <div style={{ background: 'rgba(0, 0, 0, 0.40)' }} className="absolute top-0 left-0  w-screen h-screen flex justify-center items-center z-50">
                    <div className=' px-8 pt-8 pb-4  bg-white w-96  rounded  ' style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)' }}>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 '>
                                <Image src={phone} className=" cursor-pointer shrink-0  w-5  aspect-square" alt="Company Logo" />
                                <div className=' text-textdefault font-bold text-xl'>手机号绑定</div>

                            </div>
                            <Image onClick={handleCancel} src={x_svg} className=" cursor-pointer shrink-0  w-3  aspect-square" alt="Company Logo" />
                        </div>
                        <div className=' flex flex-col justify-center items-center '>
                            <Input placeholder="请输入手机号" className="mt-5 h-10  w-75 max-w-full" />

                            <div className="flex  mt-2.5  w-75 justify-between gap-2  ">

                                <Input placeholder="请输入短信中的验证码" className=' w-50 h-10' />
                                <button className="justify-center px-3  w-22 text-xs   rounded  " style={{ color: '#404B63', border: '1px solid #d9d9d9' }}>
                                    获取验证码
                                </button>

                            </div>
                        </div>

                        <div className="flex   mt-8 flex-1 gap-2 whitespace-nowrap text-textdefault justify-end">
                            <ButtonLink onClick={handleCancel} type='button' defaultColor='#404b63' className="  text-center  leading-9  justify-center h-9 w-22 rounded-md border border-solid border-zinc-300 max-md:px-5">
                                取消
                            </ButtonLink>
                            <button className={`cursor-pointer h-9 justify-center w-22  text-white rounded-md   bg-gradient-to-r  hover:from-hoverblue  hover:to-toblue   from-formblue   to-toblue`}   >
                                确定
                            </button>
                        </div>

                    </div>

                </div>}


            {/* 微信绑定 */}
            {isModalVisible && modalType == 'vx' &&
                <div style={{ background: 'rgba(0, 0, 0, 0.40)' }} className="absolute top-0 left-0  w-screen h-screen flex justify-center items-center z-50">
                    <div className=' px-8 pt-8 pb-4  bg-white w-96  rounded  ' style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)' }}>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 '>
                                <Image src={vx_green} className=" cursor-pointer shrink-0  w-5  aspect-square" alt="Company Logo" />
                                <div className=' text-textdefault font-bold text-xl'>微信绑定</div>

                            </div>
                            <Image onClick={handleCancel} src={x_svg} className=" cursor-pointer shrink-0  w-3  aspect-square" alt="Company Logo" />
                        </div>
                        <div className=' flex flex-col justify-center items-center '>
                            <Input placeholder="请输入手机号" className="mt-5 h-10  w-75 max-w-full" />

                            <div className="flex  mt-2.5  w-75 justify-between gap-2  ">

                                <Input placeholder="请输入短信中的验证码" className=' w-50 h-10' />
                                <button className="justify-center px-3  w-22 text-xs   rounded  " style={{ color: '#404B63', border: '1px solid #d9d9d9' }}>
                                    获取验证码
                                </button>

                            </div>
                        </div>

                        <div className="flex   mt-8 flex-1 gap-2 whitespace-nowrap text-textdefault justify-end">
                            <ButtonLink onClick={handleCancel} type='button' defaultColor='#404b63' className="  text-center  leading-9  justify-center h-9 w-22 rounded-md border border-solid border-zinc-300 max-md:px-5">
                                取消
                            </ButtonLink>
                            <button className={`cursor-pointer h-9 justify-center w-22  text-white rounded-md   bg-gradient-to-r  hover:from-hoverblue  hover:to-toblue   from-formblue   to-toblue`}   >
                                确定
                            </button>
                        </div>

                    </div>

                </div>}
            <DefaultLayout>
                <div className='w-full bg-white h-full px-7 py-7'>
                    {/* 账户密码 */}
                    <div className=' rounded-lg px-13 py-8 flex  items-center  justify-between ' style={{ background: '#F6F9FF' }}>
                        <div className='flex  items-center gap-8' >

                            <Image src={lock} className=" cursor-pointer shrink-0  w-8  aspect-square" alt="Company Logo" />
                            <div className='  text-textdefault font-bold  text-xl' >账户密码</div>
                            <div className='   font-normal  text-xl' style={{ color: '#9DA3AC' }} >已设置</div>

                        </div>
                        <div onClick={() => openModal('password')} className=' text-defaultblue  font-normal cursor-pointer'>更换密码</div>

                    </div>
                    {/* 邮箱绑定 */}
                    <div className='  mt-5 rounded-lg px-13 py-8 flex  items-center  justify-between ' style={{ background: '#F6F9FF' }}>
                        <div className='flex  items-center gap-8' >

                            <Image src={email} className=" cursor-pointer shrink-0  w-8  aspect-square" alt="Company Logo" />
                            <div className='  text-textdefault font-bold  text-xl' >邮箱绑定</div>
                            <div className='   font-normal  text-xl' style={{ color: '#9DA3AC' }} >未绑定</div>

                        </div>
                        <div onClick={() => openModal('email')} className=' text-defaultblue  font-normal cursor-pointer'>立即绑定</div>

                    </div>
                    {/* 手机号绑定 */}
                    <div className='  mt-5 rounded-lg px-13 py-8 flex  items-center  justify-between  ' style={{ background: '#F6F9FF' }}>
                        <div className='flex  items-center gap-8' >

                            <Image src={phone} className=" cursor-pointer shrink-0  w-8  aspect-square" alt="Company Logo" />
                            <div className='  text-textdefault font-bold  text-xl' >手机号绑定</div>
                            <div className='   font-normal  text-xl' style={{ color: '#9DA3AC' }} >已绑定手机号：136xxxxxxxx</div>

                        </div>
                        <div onClick={() => openModal('phone')} className=' text-defaultblue  font-normal cursor-pointer'>更换手机</div>

                    </div>
                    {/* 微信绑定 */}
                    <div className='  mt-5 rounded-lg px-13 py-8 flex  items-center  justify-between  ' style={{ background: '#F6F9FF' }}>
                        <div className='flex  items-center gap-8' >

                            <Image src={vx} className=" cursor-pointer shrink-0  w-8  aspect-square" alt="Company Logo" />
                            <div className='  text-textdefault font-bold  text-xl' >微信绑定</div>
                            <div className='   font-normal  text-xl' style={{ color: '#9DA3AC' }} >未绑定</div>

                        </div>
                        <div onClick={() => openModal('vx')} className=' text-defaultblue  font-normal cursor-pointer'>立即绑定</div>

                    </div>
                    <div className='  mt-5 rounded-lg px-13 py-8 flex  items-center justify-between  ' style={{ background: '#F6F9FF' }}>
                        <div className='flex  items-center gap-8' >
                            <Image src={userCard} className=" cursor-pointer shrink-0  w-8  aspect-square" alt="Company Logo" />
                            <div className='  text-textdefault font-bold  text-xl' >实名认证（人脸识别）</div>
                            <div className='   font-normal  text-xl' style={{ color: '#9DA3AC' }} >手机扫描二维码，上传身份证，进行人脸识别认证</div>

                        </div>
                        <div className=' text-defaultblue  font-normal cursor-pointer'>去认证</div>

                    </div>

                </div>

            </DefaultLayout>
        </>
    )
}

export default Setaccount