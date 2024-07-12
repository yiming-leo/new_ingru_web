"use client"
import * as React from "react";
import { Button, Divider, Modal, Popover, Space, message, } from 'antd';
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import tips from '@/assets/svg/tips.svg';
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import axiosReq from '@/utils/req'
import { useStore } from "@/store/useStore";



type StepProps = {
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>;
    type: string
    setDeviceId: any
    deviceInfo: any
    isLink: boolean
    useData: any
};



const Footer: React.FC<StepProps> = ({ isLink, deviceInfo, setDeviceId, type, useData }) => {
    // const [messageApi, contextHolder] = message.useMessage();


    const { isshowTab, setIsshowTab, isProvideList, setIsProvideList, price, setPrice, totalPrice } = useStore();
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || '';
    const token = userInfo?.data?.token || ''
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [cancelOpen, setCancelOpen] = useState(false);
    const [createOrCancel, setCreateOrCancel] = useState('')

    const nextStep = () => {
        // setStep(2)
    }

    const [btnDisabled, setBtnDisabled] = useState(true)
    const pathName = usePathname()



    const cancel = () => {
        setCreateOrCancel('cancel')
        setCancelOpen(true);
    }
    const handleSubmit = () => {

        if (deviceInfo?.device_name && deviceInfo?.device_name !== '') {
            setCreateOrCancel('create')
            setCancelOpen(true);
        } else {
            message.error({
                content: '请输入设备名称'
            })
        }

    }


    const handleSubmitUse = () => {
        if (!useData?.hire_name && !useData?.device_id && !useData?.hire_duration) {

            if (useData?.hire_name == '' || !useData?.hire_name) {

                message.error({
                    content: '请输入设备名称'
                })
            } else if (useData?.device_id == '' || !useData?.device_id) {

                message.error({
                    content: '请选择算力节点'
                })
            } else if (useData?.hire_duration == '' || !useData?.hire_duration) {
                message.error({
                    content: '请设定使用时长'
                })
            }


        } else {
            if (useData?.hire_duration == 0) {
                message.error({
                    content: '设定使用时长最少为1小时'
                })
            } else {
                setCreateOrCancel('create')
                setCancelOpen(true);
            }


        }


    }


    useEffect(() => {
        if (pathName == '/providepower/') {
            axiosReq.post('/v1/devices/create_device_id',)
                .then(response => {
                    setBtnDisabled(false)
                    setDeviceId(response.data.deviceid)
                })
                .catch(error => {
                    message.error({
                        content: '获取设备id异常'
                    })

                });
        }




    }, [])


    const refresh = () => {

        if (deviceInfo.device_name && deviceInfo.device_name != '') {
            fetch('http://192.168.2.17:9999/v1/devices/create_device_id', {
                method: 'POST',
                headers: {
                    'token': token
                },
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Failed to create device ID');
                    }
                })
                .then(data => {
                    setBtnDisabled(false)

                    setDeviceId(data.data.deviceid
                    )
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            message.error({
                content: '请输入设备名称'
            })
        }


    }



    const handleOk = () => {
        setLoading(true);

        if (createOrCancel == 'cancel') {
            if (isshowTab) {
                router.push('/')

            } else {
                router.push('/controlboard')
            }

        } else {

            if (pathName == '/providepower/') {
                axiosReq.post('/v1/devices/add_new_devices', { ...deviceInfo })
                    .then(res => {
                        if (res.code == 200) {
                            router.push('/controlboard')
                        } else {

                        }
                    })
                    .catch(error => {
                        message.error({
                            content: '获取设备id异常'
                        })
                    });


            }
            if (pathName == '/computinguse/') {
                axiosReq.post('/v1/computing/rent_devices', { ...useData })
                    .then(res => {
                        if (res.code == 200) {
                            setIsProvideList(false)
                            message.success({
                                content: res.message
                            })

                            router.push('/controlboard')
                        } else {

                        }
                    })
                    .catch(error => {
                        message.error({
                            content: '获取设备id异常'
                        })
                    });


            }





        }

    };

    const handleCancel = () => {
        setCancelOpen(false);

    };

    const content = (
        <div style={{ color: 'white' }}>
            <div className=" text-sm">预计消费=资源算力点×设定时长/h</div>
        </div>
    );

    return (
        <footer className="">
            <Modal
                centered
                open={cancelOpen}
                title='提供算力'
                onCancel={() => {
                    setCancelOpen(false)
                }}


                footer={
                    [
                        <div key={'btn1'} className="flex justify-end gap-2">

                            <ButtonLink defaultColor='#404b63' className=" text-center text-sm leading-7 rounded-md border border-solid border-zinc-300    h-8  w-19" onClick={handleCancel}  >
                                取消
                            </ButtonLink>
                            <div onClick={handleOk} className="  text-white  leading-8 text-center text-sm  rounded-md  hover:from-hoverblue  hover:to-toblue cursor-pointer  bg-gradient-to-r from-formblue   to-toblue h-8  w-19"  >
                                确定
                            </div>
                        </div>

                        // <Button key="back" onClick={handleOk}>
                        //     确定
                        // </Button>,
                    ]
                }
            >
                <div className=" mt-5 " style={{ fontSize: '14px' }}>
                    {type == 'provide' ? (createOrCancel == 'cancel' ? '确认取消创建该提供算力资源?' : '确认创建该提供算力资源?') : (createOrCancel == 'cancel' ? '确认取消创建该使用算力资源？' : '确认创建该使用算力资源?')}

                </div>
            </Modal>
            <div className=" absolute  bottom-0  flex gap-5 px-8 py-4  w-full text-xl bg-white   " style={{ borderTop: '1px solid #d9d9d9' }}>
                <div className="flex flex-auto my-auto  gap-5 items-center   leading-10 ">
                    {/* {type == 'provide' && <span className="text-textdefault">*等待容器服务启动，返回连接状态：<span className="text-blue-600">{isLink ? '待连接' : '待连接'}  {isLink}</span></span>} */}
                    {type == 'use' && (<span>费用<span className="text-blue-600 text-3xl">{price}</span>算力点/h，预计消费<span className="text-blue-600 text-3xl">{totalPrice}</span>算力点，当前余额账户<span className=" text-green text-3xl">712.00</span>算力点</span>)}
                    {type == 'use' &&
                        <Popover overlayClassName="popstyle" placement="right" content={content}>
                            <Image
                                className=" w-5 cursor-pointer"
                                src={tips}
                                alt="icon"
                            />
                        </Popover>
                    }
                </div>


                {type == 'provide' && <div className="flex flex-1 gap-5 whitespace-nowrap text-textdefault justify-end">
                    {/* <ButtonLink onClick={refresh} type='button' defaultColor='#404b63' className="  text-center leading-10  justify-center h-11 w-29  rounded-md border border-solid border-zinc-300 max-md:px-5">
                        刷新
                    </ButtonLink> */}
                    <ButtonLink onClick={cancel} type='button' defaultColor='#404b63' className="  text-center  leading-10  justify-center h-10 w-29  rounded-md border border-solid border-zinc-300 max-md:px-5">
                        取消
                    </ButtonLink>

                    <button onClick={handleSubmit} className={`cursor-pointer h-10 justify-center w-29  text-white rounded-md max-md:px-5  bg-gradient-to-r  hover:from-hoverblue  hover:to-toblue   from-formblue   to-toblue`}   >
                        确定创建
                    </button>
                </div>}


                {type == 'use' && <div className="flex flex-1 gap-5 whitespace-nowrap text-textdefault justify-end">
                    <ButtonLink onClick={cancel} type='button' defaultColor='#404b63' className="  text-center  leading-10  justify-center h-10 w-29  rounded-md border border-solid border-zinc-300 max-md:px-5">
                        取消
                    </ButtonLink>
                    <button onClick={handleSubmitUse} className={`cursor-pointer h-10 justify-center w-29  text-white rounded-md max-md:px-5  bg-gradient-to-r  hover:from-hoverblue  hover:to-toblue   from-formblue   to-toblue`}   >
                        确定创建
                    </button>
                </div>}
            </div>
        </footer>
    )
}




export default Footer