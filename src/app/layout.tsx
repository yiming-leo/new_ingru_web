
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
