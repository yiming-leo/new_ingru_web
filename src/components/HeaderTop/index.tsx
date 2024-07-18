"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { Dropdown, Popover } from "antd";
import type { MenuProps } from 'antd';
import Image from "next/image";
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import Router from 'next/router'

import myuser_svg from '@/assets/svg/myuser.svg';
import logo_png from '@/assets/img/logo.png';
import xiala_svg from '@/assets/svg/xiala.svg';
import menu_svg from '@/assets/svg/menu.svg';
import path from "path";
import { useStore } from "@/store/useStore";
import { Button, Drawer, Radio, Space } from 'antd';
import MenuCom from "../Menu";

interface NavItemProps {
  text: string;
  href: ''
}

const NavItem: React.FC<NavItemProps> = ({ text, href, isActive, index }) => {

  const { isToFast, setIsToFast } = useStore()
  const router = useRouter()
  const content = (
    <div className=" cursor-pointer">
      <p>算力交易市场</p>
    </div>
  );
  const goLink = () => {
    if (index !== 1) {
      if (href != '/fastexperience') {
        router.push(href, { scroll: false })
      } else {
        setIsToFast(true)
        router.push('/', { scroll: false })
      }
    }

  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link className={`text-sm text-fontColor flex justify-center items-center `} href="/tradingmarket">
          <div className=" text-[#ADADAD] hover:text-gray z-20">算力交易市场</div>
        </Link>
      ),
    },
    // {
    //   key: '2',
    //   label: (
    //     <Link className="text-title-2sm text-fontColor  flex justify-center items-center" style={{ color: '#565656' }} href="/computinguse">
    //       <div className="text-title-2sm text-fontColor">使用算力</div>
    //     </Link>
    //   ),
    // },


  ];


  return (

    <div onClick={() => {
      goLink()
    }} className={` cursor-pointer my-auto rounded-md  ${isActive ? 'text-white underline' : ' text-grayDeafult'}   hover:text-white  py-2 text-sm  `} >
      {index == 1 && <Dropdown menu={{ items }} placement="bottomLeft"  >
        <div className="flex gap-1 justify-center items-center">
          <div>{text}</div>
          <div className="">
            <div className={`w-[7px]    h-[7px] bg-gray-500 transform rotate-[-45deg] border-t-transparent border-r-transparent    -translate-y-1/4 ${isActive ? 'border-white' : 'border-[#ADADAD]'}  border-[2px] rounded-[1px]`}>
            </div>




          </div>
        </div>
      </Dropdown>}
      {index !== 1 &&
        <div className="flex gap-1">
          <div>{text}</div>
        </div>
      }


    </div>
  )
}



const HeaderTop = () => {
  const pathname = usePathname();
  const router = useRouter();




  const [dataHeader, setDataHeader] = useState([

    { tabName: '首页', href: '/' },
    { tabName: '产品', href: '/tradingmarket/' },
    { tabName: '新闻', href: '/news/' },
    { tabName: '关于我们', href: '/aboutus/' },
  ])




  const { isPC, setIsPC } = useStore();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  useEffect(() => {
    console.log(window.innerHeight, 'ooo')
    if (window.innerWidth > 1024) {

      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 100) {

          setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
          setPrevScrollPos(currentScrollPos);
        }

      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos, isPC]);

  const reload = () => {
    location.reload();
  }


  return (
    <>
      <div className="flex justify-center  ">
        <Drawer
          // title="Menu"
          placement={'right'}
          closable={false}
          onClose={onClose}
          open={open}
          key={'right'}
          width={'240px'}
          style={{ background: '#0F0F1E' }}
        >
          <MenuCom></MenuCom>
        </Drawer>


        <header className={`${visible ? 'translate-y-0' : '-translate-y-full'} transition-all  duration-700 flex   flex-col  justify-between  w-full  fixed   h-12  bg-bgColor   z-20  max-w-[1920px]  `}>
          <div className={`flex gap-3  h-full px-10  lg:px-39 justify-between items-center lg:justify-start`}  >
            <Link href={'/'} className="flex  cursor-pointer items-center">
              <Image src={logo_png} className=" cursor-pointer  w-5 h-5 aspect-square" alt="Company Logo" />
              <div className=" text-white ml-2" onClick={reload}>隐入科技</div>
            </Link>

            <nav className=" hidden  lg:flex  gap-14  justify-between items-center my-auto ml-18  ">
              {dataHeader.map((item, index) => (
                <NavItem index={index} isActive={item.href == pathname} key={item.tabName} text={item.tabName} href={item.href} />
              ))}
            </nav>


            <div>
              <Image src={menu_svg} onClick={showDrawer} className=" lg:hidden  cursor-pointer  w-5 h-5 aspect-square" alt="Company Logo" />
            </div>

          </div>


          {/* <div className="w-full lg:px-39 " >
            <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.12)' }}></div>
          </div> */}
        </header>


      </div>


    </>
  )
}



export default HeaderTop;