"use client"
import HeaderTop from "@/components/HeaderTop";
import * as React from "react";
import zhCN from 'antd/es/locale/zh_CN';
import { Button, Checkbox, Dropdown, Form, Input, Pagination, Popover, Table, type TableProps, ConfigProvider, message, DatePicker } from 'antd'
import ButtonLink from '@/components/ButtonLink'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import warning from "@/assets/svg/warning.svg";
import search from "@/assets/svg/search.svg";
import nodata_svg from "@/assets/svg/nodata.svg";
import arrow from "@/assets/svg/arrow.svg";
import Image from "next/image";
import eyes from "@/assets/svg/eyes.svg";
import green from "@/assets/svg/green.svg";
import Link from "next/link";
import axiosReq from '@/utils/req'
import { useStore } from '@/store/useStore'
import point_svg from '@/assets/svg/point.svg';
import { Select, Radio } from 'antd';

const { Option } = Select;





type FormFieldProps = {
    id: string;
    label: string;
    inputType: string;
    placeholder?: string;
    alt?: string;
};



type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
interface DataType {
    key: string;
    equipment: string;
    resourceArrange: string;
    timing: object;
    state: number;
    createTime: string
}



const ControlBoard: React.FC = () => {

    const { RangePicker } = DatePicker;



    const local = zhCN
    const { isshowTab, setIsshowTab, isProvideList, setIsProvideList } = useStore();

    useEffect(() => {
        setIsshowTab(false)
    }, [])



    const [deviceList, setDeviceList] = useState<any>()
    const [totalNum, setTotal] = useState(0)
    const [currenPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const pageChange = (page = 1, pageSize = 10) => {
        setPageSize(pageSize)
        setCurrentPage(page)
        if (isProvideList) {
            getDeviceList(pageSize, page, searchValue)
        } else {
            getDeviceListUse(pageSize, page, searchValue)
        }

    }

    const searchList = (e) => {
        setSearchValue(e.target.value)
        if (isProvideList) {
            getDeviceList(10, 1, e.target.value)
        } else {
            getDeviceListUse(10, 1, e.target.value)
        }
        setCurrentPage(1)
        setPageSize(10)
    }

    const getDeviceList = (pageSize, currenPage, data = '') => {
        axiosReq.post(`/v1/devices/get_user_devicesInfo?page=${currenPage}&size=${pageSize}`, { device_name: data })
            .then(response => {
                setTotal(response.data.total)
                setDeviceList(response.data.list)
            })
            .catch(error => {

            });

    }


    const getDeviceListUse = (pageSize, currenPage, data = '') => {
        axiosReq.post(`/v1/computing/get_hire_devicesInfo?page=${currenPage}&size=${pageSize}`, { hire_name: data })
            .then(response => {
                setTotal(response.data.total)
                setDeviceList(response.data.list)
            })
            .catch(error => {

            });

    }


    useEffect(() => {

        if (isProvideList) {
            getDeviceList(10, 1, '')
        } else {
            getDeviceListUse(10, 1, '')
        }

    }, [])

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link className="text-title-2sm text-fontColor flex justify-center items-center" style={{ color: '#565656' }} href="/providepower">
                    <div className="text-title-2sm text-fontColor">提供算力</div>
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link className="text-title-2sm text-fontColor  flex justify-center items-center" style={{ color: '#565656' }} href="/computinguse">
                    <div className="text-title-2sm text-fontColor">使用算力</div>
                </Link>
            ),
        },


    ];


    const columnsProvide: TableProps<DataType>['columns'] = [
        {
            title: '设备',
            dataIndex: 'device_name',
            key: 'equipment',
            render: (text) => <div>{text}</div>,


        },
        {
            title: '资源配置',
            dataIndex: 'model',


            key: 'resourceArrange',
            render: (_, data: any) => {
                return (
                    <div>
                        {data?.model ? (<div className=' flex     items-start'>
                            <div>
                                <Popover placement="bottomLeft" content={<div className=" w-85 h-80 py-3 px-8 ">
                                    {/* gpu */}
                                    <div className="flex gap-5  items-baseline ">
                                        <Image
                                            className="  w-2 cursor-pointer"
                                            src={green}
                                            alt="icon"
                                        />
                                        <div className=" text-xl  ">
                                            GPU
                                            <div className=" mt-3  text-sm text-textgray">{data.model} 显存:{data.gpu_memory}G</div>
                                        </div>
                                    </div>
                                    <div className="  ml-7 my-5 w-full  " style={{ height: '1px', background: '#d7d4d445' }} ></div>

                                    {/* cpu */}
                                    <div className="flex gap-5  items-baseline ">
                                        <Image
                                            className="  w-2 cursor-pointer"
                                            src={green}
                                            alt="icon"
                                        />
                                        <div className=" text-xl  ">
                                            GPU数量
                                            <div className=" mt-3  text-sm text-textgray">{data.gpu_count}</div>
                                        </div>
                                    </div>
                                    <div className="  ml-7 my-5 w-full  " style={{ height: '1px', background: '#d7d4d445' }} ></div>

                                    <div className="flex gap-5  items-baseline ">
                                        <Image
                                            className="  w-2 cursor-pointer"
                                            src={green}
                                            alt="icon"
                                        />
                                        <div className=" text-xl  ">
                                            内存
                                            <div className=" mt-3  text-sm text-textgray">{data.memory
                                            }GB </div>
                                        </div>

                                    </div>
                                    <div className="  ml-7 my-5 w-full  " style={{ height: '1px', background: '#d7d4d445' }} ></div>
                                    {/* <div className="flex gap-5  items-baseline ">
                    <Image
                      className="  w-2 cursor-pointer"
                      src={green}
                      alt="icon"
                    />
                    <div className=" text-xl  ">
                      带宽
                      <div className=" mt-3  text-sm text-textgray">{data.bandwidth
                      } </div>
                    </div>

                  </div> */}
                                    {/* <div className="  ml-7 my-5 w-full  " style={{ height: '1px', background: '#d7d4d445' }} ></div> */}
                                </div>} arrow={false}>
                                    <Image
                                        className="  w-8  h-8 cursor-pointer max-w-20 "
                                        src={eyes}
                                        alt="icon"


                                    />
                                </Popover>

                            </div>
                            {data.model}</div>) : '--'}
                    </div>

                )
            }
        },
        {
            title: '设备状态',
            key: 'state',
            dataIndex: 'state',
            render: ((_, data: any) => {

                const state = data.status
                return (
                    <>
                        <div className='flex items-center gap-2'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* <circle id="Ellipse 1" cx="4" cy="4" r="4" fill={state == 0 && '#FFBF00' || state == 1 && '#52C41A' || state == 2 && '#BFBFBF'} /> */}
                                <circle id="Ellipse 1" cx="4" cy="4" r="4" fill={state == 'Offline' ? '#BFBFBF' : '#52C41A'} />
                            </svg>

                            <div>{state == 'Offline' && '待连接' || state == 'Running' && '已连接'} </div>
                        </div>
                        {/* <div className='flex items-center gap-1'>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle id="Ellipse 1" cx="4" cy="4" r="4" fill="##FFFFFF00" />
              </svg>

              <div className=' text-sm text-fontGray'>1算力节点/每小时</div>
            </div> */}
                    </>
                )



            })

        },
        {
            title: '计时',
            dataIndex: 'timing',
            key: 'timing',
            render: (_, data: any) => {

                const createTime = new Date(data.create_time);
                const nowTime = Date.now();
                let currentTime = new Date(nowTime);

                let diff = Math.abs(currentTime - createTime); // 计算两个时间的毫秒差值

                let hours = Math.floor(diff / (1000 * 60 * 60)); // 计算小时差值
                let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // 计算分钟差值


                return (
                    <>
                        <div>{data.status == 'Running' ? `已连接${hours}h  ${minutes}m` : '--'}</div>
                        {/* <div className='text-fontGray text-sm' >后自动停止</div> */}
                    </>

                )
            }
        },

        {
            title: '创建时间',
            dataIndex: 'create_time',
            key: 'createTime',

        },
        // {
        //   title: '操作',
        //   key: 'action',

        //   render: (_, item) => {

        //     return (
        //       <>
        //         <div className=' text-fontBlue'>
        //           <ButtonLink>刷新入网状态  </ButtonLink>


        //           {/* <div className='flex gap-2'>
        //             <ButtonLink> 编辑</ButtonLink>


        //             {item.state == 1 ?
        //               <ButtonLink defaultColor='#F50' activeColor='#d65514'>停用</ButtonLink > :
        //               <ButtonLink disable={item.state == 2}>  启用 </ButtonLink>

        //             }



        //             {item.state == 2 ?
        //               <ButtonLink defaultColor='#F50' activeColor='#d65514'>删除</ButtonLink > :
        //               <ButtonLink disable={item.state == 1} defaultColor='#52C41A' activeColor='#409a14'>释放</ButtonLink >
        //             }

        //           </div> */}
        //         </div>
        //       </>
        //     )
        //   }
        // },
    ];


    const enterDevelop = (url) => {
        // 或者只指定URL，新窗口将使用默认属性
        if (window) {
            window.open(url);
        }


    }

    const columnsUse = [
        {
            title: '设备',

            dataIndex: 'hire_name',
            key: 'equipment',
            render: (text) => <div>{text}</div>,

        },
        {
            title: '资源配置',

            width: '300px',
            dataIndex: 'model',
            key: 'resourceArrange',
            render: (_, data: any) => {


                return (
                    <div>
                        {data?.gpu_model ? (<div className=' flex   items-start'>
                            <div>
                                <Popover placement="bottomLeft" content={<div className=" w-85 h-80 py-3 px-8 ">
                                    {/* gpu */}
                                    <div className="flex gap-5  items-baseline ">
                                        <Image
                                            className="  w-2 cursor-pointer"
                                            src={green}
                                            alt="icon"
                                        />
                                        <div className=" text-xl  ">
                                            GPU
                                            <div className=" mt-3  text-sm text-textgray">{data.gpu_model} 显存:{data.gpu_memory}G</div>
                                        </div>
                                    </div>
                                    <div className="  ml-7 my-5 w-full  " style={{ height: '1px', background: '#d7d4d445' }} ></div>

                                    {/* cpu */}
                                    <div className="flex gap-5  items-baseline ">
                                        <Image
                                            className="  w-2 cursor-pointer"
                                            src={green}
                                            alt="icon"
                                        />
                                        <div className=" text-xl  ">
                                            GPU数量
                                            <div className=" mt-3  text-sm text-textgray">{data.gpu_count}</div>
                                        </div>
                                    </div>
                                    <div className="  ml-7 my-5 w-full  " style={{ height: '1px', background: '#d7d4d445' }} ></div>

                                    <div className="flex gap-5  items-baseline ">
                                        <Image
                                            className="  w-2 cursor-pointer"
                                            src={green}
                                            alt="icon"
                                        />
                                        <div className=" text-xl  ">
                                            内存
                                            <div className=" mt-3  text-sm text-textgray">{data.memory
                                            }GB </div>
                                        </div>

                                    </div>
                                    <div className="  ml-7 my-5 w-full  " style={{ height: '1px', background: '#d7d4d445' }} ></div>
                                    {/* <div className="flex gap-5  items-baseline ">
                    <Image
                      className="  w-2 cursor-pointer"
                      src={green}
                      alt="icon"
                    />
                    <div className=" text-xl  ">
                      带宽
                      <div className=" mt-3  text-sm text-textgray">{data.bandwidth
                      } </div>
                    </div>

                  </div> */}
                                    {/* <div className="  ml-7 my-5 w-full  " style={{ height: '1px', background: '#d7d4d445' }} ></div> */}
                                </div>} arrow={false}>
                                    <Image
                                        className="  w-8  h-8 cursor-pointer  "
                                        src={eyes}
                                        alt="icon"
                                        style={{ maxWidth: '200px' }}
                                    />
                                </Popover>

                            </div>
                            {data.gpu_model}</div>) : '--'}
                    </div>

                )
            }
        },
        {
            title: '设备状态',
            key: 'state',
            dataIndex: 'state',
            render: ((_, data: any) => {
                const state = data.status
                return (
                    <>
                        <div className='flex items-center gap-2'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* <circle id="Ellipse 1" cx="4" cy="4" r="4" fill={state == 0 && '#FFBF00' || state == 1 && '#52C41A' || state == 2 && '#BFBFBF'} /> */}
                                <circle id="Ellipse 1" cx="4" cy="4" r="4" fill={state == 'Offline' ? '#BFBFBF' : '#52C41A'} />
                            </svg>
                            <div>{state == 'Offline' && '已停止' || state == 'Running' && '运行中'} </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle id="Ellipse 1" cx="4" cy="4" r="4" fill="##FFFFFF00" />
                            </svg>

                            <div className=' text-sm text-fontGray'>0.8算力节点/每小时</div>
                        </div>
                    </>
                )



            })

        },
        {
            title: '租赁状态',
            key: 'hire_status',
            dataIndex: 'hire_status',
            render: ((_, data: any) => {

                const state = data.hire_status

                const nowTime = Date.now();
                let currentTime = new Date(nowTime);
                const endTime = new Date(data.expected_end_time)
                const isStop = currentTime > endTime

                return (
                    <>
                        <div className='flex items-center gap-2'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* <circle id="Ellipse 1" cx="4" cy="4" r="4" fill={state == 0 && '#FFBF00' || state == 1 && '#52C41A' || state == 2 && '#BFBFBF'} /> */}
                                <circle id="Ellipse 1" cx="4" cy="4" r="4" fill={state == 'Unavailable' || isStop ? '#FFBF00' : '#52C41A'} />
                            </svg>

                            <div>{((state == "Unavailable" || isStop) && '待租赁') || (state == 'Active' && '租赁中')} </div>
                        </div>
                        {/* <div className='flex items-center gap-1'>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle id="Ellipse 1" cx="4" cy="4" r="4" fill="##FFFFFF00" />
              </svg>

              <div className=' text-sm text-fontGray'>1算力节点/每小时</div>
            </div> */}
                    </>
                )



            })

        },
        {
            title: '计时',
            dataIndex: 'timing',
            key: 'timing',
            render: (_, data: any) => {

                const createTime = new Date(data.create_time);
                const nowTime = Date.now();
                let currentTime = new Date(nowTime);

                let diff = Math.abs(currentTime - createTime); // 计算两个时间的毫秒差值

                let hours = Math.floor(diff / (1000 * 60 * 60)); // 计算小时差值
                let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // 计算分钟差值


                const endTime = new Date(data.expected_end_time)
                let diffStop = Math.abs(endTime - nowTime); // 计算两个时间的毫秒差值

                let hoursStop = Math.floor(diffStop / (1000 * 60 * 60)); // 计算小时差值
                let minutesStop = Math.floor((diffStop % (1000 * 60 * 60)) / (1000 * 60)); // 计算分钟差值      


                const isStop = currentTime > endTime

                return (
                    <>
                        <div>{data.hire_status == 'Unavailable' || isStop ? '--' : `已连接 ${hours}h ${minutes}m`}</div>
                        <div className='text-fontGray text-sm' >{data.hire_status == 'Unavailable' || isStop ? '' : `${hoursStop}h ${minutesStop}min 后自动停止`}</div>
                    </>

                )
            }
        },
        {
            title: '创建时间',
            dataIndex: 'create_time',
            key: 'createTime',
            width: '18%'


        },
        {
            title: '操作',
            key: 'action',
            fixed: 'right',
            render: (_, item) => {

                return (
                    <>
                        <div className=' text-fontBlue'>
                            <div onClick={() => {
                                enterDevelop(item.operation)
                            }}>
                                <ButtonLink  >进入开发环境 </ButtonLink>
                            </div>
                            {/* <div className='flex gap-2'>
                <ButtonLink> 编辑</ButtonLink>


                {item.state == 1 ?
                  <ButtonLink defaultColor='#F50' activeColor='#d65514'>停用</ButtonLink > :
                  <ButtonLink disable={item.state == 2}>  启用 </ButtonLink>

                }



                {item.state == 2 ?
                  <ButtonLink defaultColor='#F50' activeColor='#d65514'>删除</ButtonLink > :
                  <ButtonLink disable={item.state == 1} defaultColor='#52C41A' activeColor='#409a14'>释放</ButtonLink >
                }

              </div> */}
                        </div>
                    </>
                )
            }
        },
    ];


    // const [isProvideList, setisProvideList] = useState('provide')
    const provideResource = () => {
        getDeviceList(10, 1, '')
        setIsProvideList(true)
    }

    const applyResource = () => {
        getDeviceListUse(10, 1, '')

        setIsProvideList(false)
    }
    const [placement, SetPlacement] = useState<SelectCommonPlacement>('topLeft');

    const placementChange = (e: RadioChangeEvent) => {
        SetPlacement(e.target.value);
    };

    const renderEmpty = () => (
        <div className=" h-75  w-full relative right-25  flex flex-col items-center justify-center">
            <Image
                className="w-30 h-30"
                src={nodata_svg}
                alt="icon"
            />
            <div className=" text-title-2sm" style={{ color: '#404b63' }}>
                {isProvideList ? '暂无提供资源' : '暂无使用资源'}
            </div>
            <Link className=" text-sm cursor-pointer" style={{ color: '#4183ff' }} href={`${isProvideList ? '/providepower/' : '/computinguse/'}`}>
                去创建一个
            </Link>
        </div>

    )



    return (
        <DefaultLayout>
            {/* <div className="  absolute bg-lightBlue  z-0   w-full"  style={{height:'70px'}}></div> */}
            <div className=" mb-5 gap-3 rounded px-5 flex items-center border h-13  border-bdyellow  bg-bgyellow">
                <Image
                    className=" w-5"
                    src={warning}
                    alt="icon"
                />
                <div className=" text-xl  text-textdefault">
                    为保障您的使用体验，结合相关法律规定，请尽快完成实名认证 <span className=" ml-3 cursor-pointer text-textyellow">立即实名</span>
                </div>
            </div>

            <div className=" text-xl  my-5 py-9    px-8  relative      bg-white ">
                <div>
                    <div className="  gap-3 flex items-center">
                        <div className=" w-1 h-6  bg-defaultblue"></div>
                        <div className=" text-2xl font-bold  text-textdefault">个人账户</div>


                    </div>
                    <div className=" flex justify-between  mt-5 rounded px-10 py-10" style={{ background: '#F6F9FF' }}>
                        <div className="  flex items-center ">
                            <div className=" text-fontColor">账户余额(算力点)</div>
                            <Image
                                className=" w-8 ml-5"
                                src={point_svg}
                                alt="icon"
                            />
                            <div className=" text-4xl text-textdefault font-bold  ml-1 ">156.00</div>
                            <div className=" text-xl ml-2" style={{ color: '#9DA3AC' }}>（1人民币=10算力点）</div>
                        </div>
                        <div className=" py-2  px-6 rounded text-xl" style={{ background: 'linear-gradient(90deg, #FFBC76 0%, #FFCE86 100%)', color: '#684D2E' }}>充值</div>
                    </div>
                </div>





            </div>

            <div className=" bg-white px-7 py-7  ">
                <div className="  gap-3 flex items-center">
                    <div className=" w-1 h-6  bg-defaultblue"></div>
                    <div className=" text-2xl font-bold  text-textdefault">个人账户</div>
                </div>

                <div className=" mt-6 flex items-center  gap-12  flex-wrap">
                    <div className="flex items-center">
                        <div className=" text-xl text-textdefault">交易金额：</div>
                        <Radio.Group value={placement} onChange={placementChange}>
                            <Radio.Button className="h-10  w-20 leading-10 " value="topLeft">全部</Radio.Button>
                            <Radio.Button className="h-10  w-20  leading-10 " value="topRight">支出</Radio.Button>
                            <Radio.Button className="h-10  w-20  leading-10 " value="bottomLeft">收入</Radio.Button>

                        </Radio.Group>
                    </div>
                    <div className="flex items-center">
                        <div className=" text-xl text-textdefault">交易类型：</div>
                        <Select
                            size={'middle'}
                            placeholder={'请选择'}
                            className=" w-60 h-10 "


                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />

                    </div>
                    <div className="flex items-center">
                        <div className=" text-xl text-textdefault">起止时间：</div>
                        <ConfigProvider locale={local} renderEmpty={renderEmpty}>
                            <RangePicker className="h-10" />
                        </ConfigProvider>

                    </div>
                    <div className="flex gap-3  w-64">
                        <button onClick={searchList} className={`cursor-pointer  justify-center leading-10  text-xl  h-10   px-8  text-white rounded-md   bg-defaultblue hover:bg-blue-600  `}   >
                            查询
                        </button>
                        {/* <div className="   leading-10  text-xl  h-10   px-8 rounded-md  bg-circleBlue text-white  cursor-pointer    ">查询</div> */}
                        <ButtonLink type='button' defaultColor='#404b63' className="flex items-center  text-center   align-middle     text-xl h-10  px-8 rounded-md  border border-solid border-zinc-300 ">
                            <div> 重置</div>
                        </ButtonLink>


                    </div>

                </div>

                <ConfigProvider locale={local} renderEmpty={renderEmpty}>

                    <Table className="table-style mt-10   " scroll={{ x: (isProvideList || deviceList?.length == 0) ? undefined : 1700 }} columns={isProvideList ? columnsProvide : columnsUse} dataSource={deviceList} pagination={false} />
                    <Pagination
                        className=" mt-4  px-3 py-5 "
                        total={totalNum}
                        showTotal={(total) => `共 ${total}条`}
                        defaultPageSize={pageSize}
                        pageSize={pageSize}
                        defaultCurrent={currenPage}
                        onChange={(page, pageSize) => pageChange(page, pageSize)}
                        showSizeChanger={true}
                        pageSizeOptions={[5, 10, 20, 30, 40, 50, 100]}
                    />

                </ConfigProvider>
            </div>

        </DefaultLayout>
    )
}
export default ControlBoard;