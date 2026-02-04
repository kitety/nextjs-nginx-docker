import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 生成 standalone 输出，配合 Dockerfile 中的 .next/standalone 使用
  output: "standalone",
};

export default nextConfig;
