const blogs = [
	{
		tag: 'Tech Blog ',
		title: 'Scaling Media Machine Learning at Netflix',
		by: 'Gustavo Carmo, Elliot Chow, Nagendra Kamath, Akshay Modi , Jason Ge Wenbing Bai Jackson de Campos',

		imageUrl: '',
	},
	{
		tag: 'Company newsroom ',
		title: 'Top 10 Week of February 20: Pogues 4 Life - ‘Outer Banks’ Is the Most Viewed Title This Week; ‘We Have a Ghost’ Tops the English Films List',
		by: '',
		imageUrl: '/images/site/blog.png',
	},
];

export async function getAllBlogs() {
	return blogs;
}
