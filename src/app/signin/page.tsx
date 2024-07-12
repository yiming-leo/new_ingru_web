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

const FormField: React.FC<FormFieldProps> = ({ id, label, inputType, placeholder, alt }) => (
  <div>
    <label htmlFor={id} className="sr-only">{label}</label>
    <input
      id={id}
      type={inputType}
      placeholder={placeholder}
      aria-label={label}
      className="w-full p-3 mt-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
      alt={alt}
    />
  </div>
);

const SignIn: React.FC = () => (
  <div className="flex flex-col     items-center pb-8 text-base bg-white   h-screen overflow-auto  ">
    <HeaderTop></HeaderTop>
    <div  className="flex-1 w-full justify-center items-center flex    py-47.5 ">
    <main style={{boxShadow:' 0px 4px 40px 0px rgba(24, 144, 255, 0.12)'}} className=" w-150 flex justify-center items-center px-16 py-14  max-w-full whitespace-nowrap bg-white rounded-xl shadow-2xl  max-md:px-5 max-md:mt-10">
      <div className="max-w-full w-[416px]">
        <div className=" text self-center text-4xl tracking-tight flex justify-center bg-clip-text   "  >
          <div className='w-35' style={{ background: 'linear-gradient(90deg, #8C2AFC 2.48%, #0BFBEC 97.52%)', backgroundClip: 'text', color: 'transparent' }} >
          登录账号
          </div>
          </div>
        <div className="shrink-0 mt-8 h-1" />

        <Form

          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          // initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input className=" h-15   text-xl" placeholder="请输入手机号" />
          </Form.Item>
          

          <Form.Item<FieldType>

            name="password"
            rules={[{ required: true, message: '请输入登录密码' }]}
          >
            <Input.Password  className=" h-15  text-xl" placeholder="登陆密码" />
          </Form.Item>


          <div className="flex gap-5 justify-between mt-6 text-sky-500">
          <a href="#" className="hover:underline">立即注册</a>
          <a href="#" className="hover:underline">找回密码</a>
        </div>

            <Button type="primary" htmlType="submit" className="w-full mt-6 h-14" style={{background: 'linear-gradient(90deg, #004DDC 0%, #4183FF 100%)'}}>
              Submit
            </Button>

        </Form>
       
     
       

       

      </div>
    </main>
    </div>



    <footer className="font-bold text-center underline leading-[150%] text-slate-600 max-md:mt-10">
      <span className="leading-6 text-slate-600">Copyright©2024 | </span>
      <a href="http://beian.miit.gov.cn/" className="leading-6 underline text-slate-600" target="_blank" rel="noopener noreferrer">
        浙ICP备88888888888号
      </a>
    </footer>
  </div>
);
export default SignIn;