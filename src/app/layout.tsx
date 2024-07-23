
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Head from "next/head";
import type { Metadata } from 'next'
import dynamic from "next/dynamic";
import Adaptation from "@/components/common/Adaptation";
import Script from "next/script";
import { ConfigProvider } from "antd";
import zhCN from 'antd/es/locale/zh_CN';

export const metadata: Metadata = {
  title: '隐入科技',

}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const local = zhCN

  return (
    <html lang="CN">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZW9VBF88B3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);};
         gtag('js', new Date());
         gtag('config', 'G-ZW9VBF88B3');`
          }}
        >
        </script>
      </head>
      <body suppressHydrationWarning={true}>
        <ConfigProvider locale={local} >

          <Adaptation >
            {children}
          </Adaptation>
        </ConfigProvider>
      </body>
    </html>
  );
}
