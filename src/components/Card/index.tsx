"use client"
import { useRouter, usePathname } from 'next/navigation';

import './index.css'

interface CardProps {
    title: string;
    description: string;
    buttonText: string;
    href?:string
  }
  


const Card: React.FC<CardProps> = ({ title, description, buttonText,href }) =>{
  const router = useRouter()

  const link = ()=>{
    if(href=='/fastexperience'){
    if(typeof window !== 'undefined'){
      const height = window.innerHeight

      const  options= {
        top:  height,
        Left: 0,
        behavior: 'smooth' // *平滑滚动 瞬间滚动 默认值*
    }
      window.scrollTo(options)
 

    }
       
    }else{
      router.push(href, { scroll: false })
    }
    // if(href){
    //   router.push(href, { scroll: false })
    // }
  
  }


  
  return(
    <div className=" cursor-pointer card-style rounded    w-1/3 px-7 flex flex-col justify-around  py-8 gap-7  bg-littleBlue  hover:bg-white  " >
      <div>
      <h2 className="text-3xl   font-medium   text-textdefault"  style={{fontFamily:'alibb'}}>{title}</h2>
      <p className="mt-4 text-xl text-textdefault h-14  " style={{fontFamily:'alibb-light'}} >{description}</p>
      </div>
      <button onClick={link}  className=" transition duration-300 hover:bg-gradient-to-r  hover:from-hoverblue  hover:to-toblue cursor-pointer   text-center py-4 text-2xl text-white rounded-md  w-52 bg-gradient-to-r  from-formblue   to-toblue" >{buttonText}</button>
    </div>
  );
} 
  

  export default Card