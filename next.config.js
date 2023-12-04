/** @type {import('next').NextConfig} */
const nextConfig = {
    router: {
        routes: () => [
          {
            path: "/lihat-semua",
            component: () => import("category/lihat-semua"),
          },
        ],
      },
}

module.exports = nextConfig
