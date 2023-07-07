/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['nude-project.com'],
	},
	experimental: {
		serverActions: true,
	},
}

module.exports = nextConfig
