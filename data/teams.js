const teams = [
	{
		icon: '/images/site/Product.svg',
		title: 'Products & Technology',
		subItems: [
			'Business Development',
			'Client and UI Engineering',
			'Consumer Insights',
			'Core Engineering',
			'Creative Production',
			'Data Platform',
			'Data Science and Engineering',
			'Design',
			'Netflix Technology Services',
			'Partnership',
			'Product Management',
			'Security',
			'Studio Technologies',
			'Video Encoding and Streaming',
		],
	},
	{
		icon: '/images/site/Content.svg',
		title: 'Content',
		subItems: [
			'Content Acquisition',
			'Content Legal',
			'Post Production Management',
			'Production Services and Technology',
			'Production Management',
			'VFX',
			'Virtual Production',
			'Animation',
		],
	},
	{
		icon: '/images/site/corporate.functions.svg',
		title: 'Content',
		subItems: [
			'Communications',
			'Customer Service',
			'Corporate Real Estate',
			'Employee Health',
			'Workplace Security',
			'Finance',
			'Financial Planning and Analysis',
			'Legal and Public Policy',
			'Strategy and Analysis',
			'Talent and Recruiting',
			'Travel and Transportation',
		],
	},
	{
		icon: '/images/site/Marketing.svg',
		title: 'Marketing and Publicity',
		subItems: [
			'Editorial and Publishing',
			'Consumer Products',
			'Creative Marketing',
			'Creative Marketing Production',
			'Partner Marketing',
			'Publicity',
			'Regional Marketing',
		],
	},
	{
		icon: '/images/site/Gaming__1_.svg',
		title: 'Games',
		subItems: [
			'Night School Studio',
			'Netflix Games Studio',
			'Boss Fight Entertainment',
			'Next Games',
			'Moonloot',
			'Spry Fox',
		],
	},
];
const pageTitles = {
	teams: 'Join Your Dream Team',
	location: 'Locations Across the Globe',
	newGrads: 'New Grad Program',
	intern: 'Intern Program',
};
const landingImages = {
	image1: '/images/site/landing1.jpeg',
	image2: '/images/site/landing2.jpeg',
};

export function getTeamsLandingImages() {
	return landingImages;
}

export function getPageTitles() {
	return pageTitles;
}

export function getAllTeams() {
	return teams;
}
