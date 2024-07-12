import HeaderTop from "@/components/HeaderTop";
import * as React from "react";

interface NavBarProps {
  src: string;
  alt: string;
}

const NavBar: React.FC<NavBarProps> = ({ src, alt }) => (
  <div className="flex gap-3 self-stretch px-8 py-6 text-3xl whitespace-nowrap text-slate-50 max-md:flex-wrap max-md:px-5">
    <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-square w-[35px]" />
    {/* <div className="flex-auto my-auto max-md:max-w-full">隐入科技</div> */}
  </div>
);

interface RecoveryOptionProps {
  isActive: boolean;
  label: string;
}

const RecoveryOption: React.FC<RecoveryOptionProps> = ({ isActive, label }) => (
  <div className={`flex-auto ${isActive ? 'bg-clip-text' : 'text-slate-600'}`}>
    {label}
  </div>
);

const Form: React.FC = () => (
  <form className="flex flex-col max-w-full w-[416px]">
    <div className="flex gap-5 self-center max-w-full text-2xl tracking-tight text-center leading-[57.6px] w-[308px]">
      <RecoveryOption isActive={true} label="手机号找回" />
      <RecoveryOption isActive={false} label="邮箱找回" />
    </div>
    <div className="z-10 shrink-0 mt-4 w-52 h-1" />
    <div className="shrink-0 h-px bg-zinc-300" />
    <div className="justify-center items-start px-8 py-6 mt-5 rounded-md border border-solid border-sky-500 border-opacity-20 text-zinc-300 max-md:px-5">
      <label className="sr-only" htmlFor="phoneInput">请输入手机号</label>
      <input className="w-full bg-transparent border-none focus:outline-none" type="text" id="phoneInput" placeholder="请输入手机号" aria-label="请输入手机号" />
    </div>
    <div className="flex gap-5 justify-between px-8 py-6 mt-5 rounded-md border border-solid border-sky-500 border-opacity-20 max-md:px-5">
      <label className="sr-only" htmlFor="captchaInput">请输入验证码</label>
      <input className="flex-1 bg-transparent border-none focus:outline-none text-zinc-300" type="text" id="captchaInput" placeholder="请输入验证码" aria-label="请输入验证码" />
      <button className="text-sky-500" type="button">获取验证码</button>
    </div>
    <button type="submit" className=" justify-center items-center px-16 py-4 mt-8 text-xl text-white rounded-md max-md:px-5">
      确定
    </button>
  </form>
);

const Footer: React.FC = () => (
  <footer className="mt-72 font-bold text-center underline leading-[150%] text-slate-600 max-md:mt-10">
    <span className="leading-6 text-slate-600">Copyright©2024 | </span>
    <a href="http://beian.miit.gov.cn/" className="leading-6 underline text-slate-600" target="_blank" rel="noopener noreferrer">
      浙ICP备88888888888号
    </a>
  </footer>
);

const MyComponent: React.FC = () => (
  <div className="flex flex-col items-center pb-8 text-base bg-white">
    <HeaderTop></HeaderTop>
    <main className="flex justify-center items-center px-16 py-16 mt-64 max-w-full whitespace-nowrap bg-white rounded-xl shadow-2xl w-[636px] max-md:px-5 max-md:mt-10">
      <Form />
    </main>
    <Footer />
  </div>
);

export default MyComponent;