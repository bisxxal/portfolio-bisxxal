import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors:true
    },
    eslint:{
        ignoreDuringBuilds:true
    },
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn4.iconfinder.com',  
            },
            {
                protocol: 'https',
                hostname:'user-images.githubusercontent.com'
            }
            
        ],
    }

};

export default nextConfig;
