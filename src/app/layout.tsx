
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

export const metadata: Metadata = {
  title: '隐入科技',
  // description: '掘金算力平台',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // const Adaptation = dynamic(() => import('@/components/common/Adaptation'));
  return (
    <html lang="CN">

      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GR8X3LDNG9"></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-GR8X3LDNG9');`
          }}
        >
        </Script>
      </Head>
      <body suppressHydrationWarning={true}>
        {/* <Suspense fallback={<Loader />}>
          <Adaptation >
            {children}
          </Adaptation>
        </Suspense> */}
        <Adaptation >
          {children}
        </Adaptation>

      </body>
    </html>
  );
}
