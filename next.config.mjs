/** @type {import('next').NextConfig} */
import withAntdLess from 'next-plugin-antd-less';
// import createNextIntlPlugin from 'next-intl/plugin';

const CORS_HEADERS = [
  {
    key: "Access-Control-Allow-Credentials",
    value: "true"
  },
  {
    key: "Access-Control-Allow-Origin",
    value: "*"
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET,DELETE,PATCH,POST,PUT"
  },
  {
    key: "Access-Control-Allow-Headers",
    value: "Content-Type, Authorization",
  },
];



const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  reactStrictMode: false,
  env: {
    "JWT_SECRET": "next-admin",
    "BASE_API_URL": "/api"
  },
  async headers() {

    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/api/:path*", // 为访问 /api/** 的请求添加 CORS HTTP Headers
        headers: CORS_HEADERS
      },
      {
        source: "/specific", // 为特定路径的请求添加 CORS HTTP Headers,
        headers: CORS_HEADERS
      }
    ];
  },
  swcMinify: true,
  fastRefresh: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  concurrentFeatures: true,
  webpack: (config, { isServer }) => {

    config.optimization.minimize = true;
    // 添加file-loader和url-loader配置
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // 小于8KB的文件会被转为base64
            fallback: 'file-loader',
            publicPath: '/_next/static/videos/',
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],

    });


    return config;
  },
};

const withNextIntl = nextConfig

export default withAntdLess(withNextIntl);
