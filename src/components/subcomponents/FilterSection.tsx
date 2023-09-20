import { useState } from 'react';
import Wrapper from '../reusable/Wrapper';

import './FilterSection.scss';

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
];

const FilterSection = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	return (
		<Wrapper className='filter'>
			<button
				className='filter__btn'
				onClick={() => setIsFilterOpen(!isFilterOpen)}
			>
				{!isFilterOpen ? (
					<span className='material-symbols-outlined filter__btn-icon'>
						filter_alt
					</span>
				) : (
					<span className='material-symbols-outlined filter__btn-icon'>
						filter_alt_off
					</span>
				)}
			</button>
			<input
				className={isFilterOpen ? 'filter__input filter__input--open' : 'filter__input' }
				placeholder='Search by a keyword'
				onFocus={() => console.log('focused')}
				onBlur={() => console.log('blurred')}
				onChange={(e) => {
					console.log(e.target.value);
				}}
			/>
			<ul className='filter__list'>
				{dummyKeywords.map((keyword) => (
					<li className='filter__list-item' key={keyword}>{keyword}</li>
				))}
			</ul>
		</Wrapper>
	);
};

export default FilterSection;
