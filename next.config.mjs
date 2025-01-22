/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/instance/sean",
        destination: `https://seangpt-sean-corcorans-projects.vercel.app/`,
      }
    ];
  },
};

module.exports = nextConfig;