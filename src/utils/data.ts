export const getJobs = () => {
	const jobsArray = [
		{
			id: 1,
			company: 'Photosnap',
			logo: require('../assets/images/photosnap.png'),
			new: true,
			featured: true,
			position: 'Senior Frontend Developer',
			role: 'Frontend',
			level: 'Senior',
			postedAt: '1d ago',
			contract: 'Full Time',
			location: 'USA Only',
			languages: ['HTML', 'CSS', 'JavaScript'],
			tools: [],
		},
		{
			id: 2,
			company: 'Manage',
			logo: require('../assets/images/manage.png'),
			new: true,
			featured: true,
			position: 'Fullstack Developer',
			role: 'Fullstack',
			level: 'Midweight',
			postedAt: '1d ago',
			contract: 'Part Time',
			location: 'Remote',
			languages: ['Python'],
			tools: ['React'],
		},
		{
			id: 3,
			company: 'Account',
			logo: require('../assets/images/account.png'),
			new: true,
			featured: false,
			position: 'Junior Frontend Developer',
			role: 'Frontend',
			level: 'Junior',
			postedAt: '2d ago',
			contract: 'Part Time',
			location: 'USA Only',
			languages: ['JavaScript'],
			tools: ['React', 'Sass'],
		},
		{
			id: 4,
			company: 'MyHome',
			logo: require('../assets/images/myhome.png'),
			new: false,
			featured: false,
			position: 'Junior Frontend Developer',
			role: 'Frontend',
			level: 'Junior',
			postedAt: '5d ago',
			contract: 'Contract',
			location: 'USA Only',
			languages: ['CSS', 'JavaScript'],
			tools: [],
		},
		{
			id: 5,
			company: 'Loop Studios',
			logo: require('../assets/images/loop-studios.png'),
			new: false,
			featured: false,
			position: 'Software Engineer',
			role: 'Fullstack',
			level: 'Midweight',
			postedAt: '1w ago',
			contract: 'Full Time',
			location: 'Worldwide',
			languages: ['JavaScript'],
			tools: ['Ruby', 'Sass'],
		},
		{
			id: 6,
			company: 'FaceIt',
			logo: require('../assets/images/faceit.png'),
			new: false,
			featured: false,
			position: 'Junior Backend Developer',
			role: 'Backend',
			level: 'Junior',
			postedAt: '2w ago',
			contract: 'Full Time',
			location: 'UK Only',
			languages: ['Ruby'],
			tools: ['RoR'],
		},
		{
			id: 7,
			company: 'Shortly',
			logo: require('../assets/images/shortly.png'),
			new: false,
			featured: false,
			position: 'Junior Developer',
			role: 'Frontend',
			level: 'Junior',
			postedAt: '2w ago',
			contract: 'Full Time',
			location: 'Worldwide',
			languages: ['HTML', 'JavaScript'],
			tools: ['Sass'],
		},
		{
			id: 8,
			company: 'Insure',
			logo: require('../assets/images/insure.png'),
			new: false,
			featured: false,
			position: 'Junior Frontend Developer',
			role: 'Frontend',
			level: 'Junior',
			postedAt: '2w ago',
			contract: 'Full Time',
			location: 'USA Only',
			languages: ['JavaScript'],
			tools: ['Vue', 'Sass'],
		},
		{
			id: 9,
			company: 'Eyecam Co.',
			logo: require('../assets/images/eyecam-co.png'),
			new: false,
			featured: false,
			position: 'Full Stack Engineer',
			role: 'Fullstack',
			level: 'Midweight',
			postedAt: '3w ago',
			contract: 'Full Time',
			location: 'Worldwide',
			languages: ['JavaScript', 'Python'],
			tools: ['Django'],
		},
		{
			id: 10,
			company: 'The Air Filter Company',
			logo: require('../assets/images/the-air-filter-company.png'),
			new: false,
			featured: false,
			position: 'Front-end Dev',
			role: 'Frontend',
			level: 'Junior',
			postedAt: '1mo ago',
			contract: 'Part Time',
			location: 'Worldwide',
			languages: ['JavaScript'],
			tools: ['React', 'Sass'],
		},
	];

	return jobsArray;
};
