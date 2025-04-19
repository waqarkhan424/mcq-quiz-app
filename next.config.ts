// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.watchOptions = {
      ignored: ['**/Application Data/**'],
    };
    return config;
  },
};

export default nextConfig;
