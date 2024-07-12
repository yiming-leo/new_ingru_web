"use client"
import HeaderTop from "@/components/HeaderTop";
import * as React from "react";
import { Button, Checkbox, Form, Input } from 'antd'

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



const SignIn: React.FC = () => {






  return (
    <div className="   items-center pb-8 text-base bg-white  h-screen overflow-auto ">
      <HeaderTop></HeaderTop>
      <div className="w-full justify-center items-center flex  mt-22">
        <main style={{ boxShadow: ' 0px 4px 40px 0px rgba(24, 144, 255, 0.12)' }} className="flex justify-center items-center px-16 py-16   whitespace-nowrap bg-white rounded-xl shadow-2xl  w-150 h-180 ">
          <div className="">
            <div className=" justify-between flex text self-center text-4xl tracking-tight  bg-clip-text   "  >
              <div className=" text-center text-2xl" style={{ width: '50%', background: 'linear-gradient(90deg, #8C2AFC 2.48%, #0BFBEC 97.52%)', backgroundClip: 'text', color: 'transparent' }} >
                手机号注册
              </div>
              <div className=' text-center text-2xl' style={{ width: '50%', backgroundClip: 'text', color: '#404B63' }} >
                邮箱注册
              </div>
            </div>
            <div className="shrink-0 mt-8 h-1 " style={{ background: 'linear-gradient(90deg, #8C2AFC 2.48%, #0BFBEC 97.52%)' }} />

            <Form

              // labelCol={{ span: 8 }}
              // wrapperCol={{ span: 16 }}
              // style={{ maxWidth: 600 }}
              // initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="mt-5"
            >
              <Form.Item<FieldType>
                name="username"
                rules={[{ required: true, message: '请输入邮箱' }]}
              >
                <Input className=" h-15   text-xl" placeholder="请输入邮箱" />
              </Form.Item>
              <Form.Item<FieldType>
                name="username"
                rules={[{ required: true, message: '请输入验证码' }]}
                className="mt-5"
              >
                <Input className=" h-15   text-xl" placeholder="输入验证码" />
              </Form.Item>
              <Form.Item<FieldType>
                name="username"
                className="mt-5"
                rules={[{ required: true, message: '请设置密码' }]}
              >
                <Input className=" h-15   text-xl" placeholder="设置密码" />
              </Form.Item>


              <Form.Item<FieldType>

                name="password"
                className="mt-5"
                rules={[{ required: true, message: '请输入登录密码' }]}
              >
                <Input.Password className=" h-15  text-xl" placeholder="请再次输入密码" />
              </Form.Item>




              <p className="mt-4    text-base  " style={{ color: '#d9d9d9' }}>
                密码须包含有大小写字母、数字、符号中的两种，密码长度为6-20字符
              </p>

              <div className="flex gap-2.5 items-center mt-5">
                <input type="checkbox" id="agreement" className="shrink-0 self-stretch w-5 h-5 border border-solid border-zinc-300" />
                {/* <label htmlFor="agreement" className="sr-only">服务隐私与协议</label> */}
                <label htmlFor="agreement" className="  opacity-50 self-stretch my-auto leading-[162.5%]" style={{ color: '#404B63;' }}>我已阅读并同意</label>
                <a href="/" className="“ text-sky-500">服务隐私与协议</a>
              </div>

              <div className="flex flex-col">
                <button type="submit" className="w-full px-16 py-4 mt-8 text-xl text-white rounded-md " style={{ background: 'linear-gradient(90deg, #004DDC 0%, #4183FF 100%)' }}
                >
                  立即注册
                </button>

                <button type="button" className="w-full px-16 py-4 mt-5 text-xl rounded-md border border-solid border-zinc-300 ">
                  登录已有账号
                </button>
              </div>

            </Form>






          </div>
        </main>
      </div>



      <footer className=" font-bold text-center underline leading-[150%] text-slate-600   pt-12">
        <span className="leading-6 text-slate-600">Copyright©2024 | </span>
        <a href="http://beian.miit.gov.cn/" className="leading-6 underline text-slate-600" target="_blank" rel="noopener noreferrer">
          浙ICP备88888888888号
        </a>
      </footer>
    </div>
  )
}
export default SignIn;