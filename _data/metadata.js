const timestamp = new Date();

module.exports = {
	title: "Graham Harper",
	url: "https://grahamharper.ie/",
	repo: "https://github.com/grahamharper/grahamharper-site",
	language: "en",
	description:
		"Graham Harper is a product design lead based on Dublin, Ireland",
	author: {
		name: "Graham Harper",
		email: "graham@hrpr.co",
		url: "https://grahamharper.ie/about-me/",
	},
	env: process.env.ELEVENTY_ENV,
	timestamp: timestamp,
	id: timestamp.valueOf(),
};
