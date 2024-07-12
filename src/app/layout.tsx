
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Head from "next/head";
import type { Metadata } from 'next'
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

  return (
    <html lang="CN">
      <body suppressHydrationWarning={true}>
        <Adaptation >
          {children}
        </Adaptation>
      </body>
    </html>
  );
}
