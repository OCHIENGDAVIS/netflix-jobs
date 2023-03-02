const videos = [
	{
		thumbnailUrl: '/images/site/heather.png',
		videoUrl: 'https://www.youtube.com/watch?v=RJNnghJpfrM',
		title: '9 to 5 with Heather Dowdy',
	},
	{
		thumbnailUrl: '/images/site/hasting.png',
		videoUrl: 'https://www.youtube.com/watch?v=BH-Dq50Cz8Q',
		title: 'Reed Hastings top 5 lessons learned',
	},
	{
		thumbnailUrl: '/images/site/inclusion.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=theDAEYSKFE',
		title: 'Sowing the Seeds: Inclusion Takes Root at Netflix',
	},
];

export async function getAllVideos() {
	return videos;
}
