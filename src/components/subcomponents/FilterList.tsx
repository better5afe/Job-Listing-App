import Wrapper from '../reusable/Wrapper';
import FilterTile from '../reusable/FilterTile';

import './FilterList.scss';

const dummyKeywords = [
	'senior',
	'react',
	'html',
	'css',
	'mid',
	'junior',
	'angular',
	'vue',
	'typescript',
// 	'senior',
// 	'react',
// 	'html',
// 	'css',
// 	'mid',
// 	'junior',
// 	'angular',
// 	'vue',
// 	'typescript',
// 	'senior',
// 	'react',
// 	'html',
// 	'css',
// 	'mid',
// 	'junior',
// 	'angular',
// 	'vue',
// 	'typescript',
// ];
]

const FilterList = () => {
	const deleteFilterHandler = () => {
		console.log('delete filter');
	};

	return (
		<Wrapper className='keywords-box'>
			<ul className='keywords-box__list'>
				{dummyKeywords.map((keyword) => (
					<FilterTile
						id={keyword}
						key={keyword}
						text={keyword}
						onDeleteKeyword={deleteFilterHandler}
					/>
				))}
			</ul>
			<button className='keywords-box__btn'>Clear filters</button>
		</Wrapper>
	);
};

export default FilterList;
