const locationLandingImages = {
	image1: '/images/site/location1.jpeg',
	image2: '/images/site/location2.jpeg',
};
const locations = [
	{
		icon: '/images/site/europe.middle.east.africa.svg',
		title: 'Europe, Middle East, Africa',
		subItems: [
			'Amsterdam, Netherlands',
			'Berlin, Germany',
			'London, United Kingdom',
			'Madrid, Spain',
			'Paris, France',
			'Rome, Italy',
			'Istanbul, Turkey',
			'Stockholm, Sweden',
			'Copenhagen, Denmark',
			'Warsaw, Poland',
			'Helsinki, Finland',
		],
	},
	{
		icon: '/images/site/asia.pacific.svg',
		title: 'Asia Pacific',
		subItems: [
			'Bangkok, Thailand',
			'Hsinchu City, Taiwan',
			'Jakarta, Indonesia',
			'Manila, Philippines',
			'Mumbai, India',
			'Seoul, South Korea',
			'Singapore, Singapore',
			' Sydney, Australia',
			'Tokyo, Japan',
		],
	},
	{
		icon: '/images/site/ucan.svg',
		title: 'The United States, Canada',
		subItems: [
			'Los Angeles, California',
			'Los Gatos, California',
			'New York, New York',
			'Salt Lake City, Utah',
			'Washington, DC',
			'Toronto, Canada',
		],
	},
	{
		icon: '/images/site/latin.america.svg',
		title: 'Latin America',
		subItems: [
			'Alphaville, Brazil',
			'Mexico City, Mexico',
			'Buenos Aires, Argentina',
			'Bogota, Colombia',
		],
	},
];

export function getLocationLandingImages() {
	return locationLandingImages;
}

export function getLocations() {
	return locations;
}
