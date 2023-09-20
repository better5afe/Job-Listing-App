import { useEffect, useState, useRef } from 'react';
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
	const [isInputInFocus, setIsInputInFocus] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [filteredKeywords, setFilteredKeywords] = useState<string[]>([]);

	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const toggleFilterHandler = () => {
		setIsFilterOpen(!isFilterOpen);
		setIsInputInFocus(false)
	};

	const focusHandler = () => {
		setIsInputInFocus(true);
	};

	const filterKeywordsHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setInputValue(event.target.value);

		const filteredList = dummyKeywords.filter((keyword) =>
			keyword.toLowerCase().includes(event.target.value.toLowerCase())
		);

		setFilteredKeywords(filteredList);
	};

	const selectKeywordHandler = () => {
		console.log('object');
		setFilteredKeywords([]);
		setInputValue('');
	};

	useEffect(() => {
		const blur = (event: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setIsInputInFocus(false);
				setIsFilterOpen(false);
				setInputValue('');
			}
		};

		window.addEventListener('click', blur);
	}, []);

	return (
		<Wrapper className='filter' ref={wrapperRef}>
			<button
				id='filter-btn'
				className='filter__btn'
				onClick={toggleFilterHandler}
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
				className={
					isFilterOpen ? 'filter__input filter__input--open' : 'filter__input'
				}
				placeholder='Search by a keyword'
				onFocus={focusHandler}
				onChange={filterKeywordsHandler}
				value={inputValue}
			/>
			<ul
				id='filter-list'
				className={
					isInputInFocus ? 'filter__list filter__list--active' : 'filter__list'
				}
			>
				{inputValue === '' &&
					dummyKeywords.map((keyword) => (
						<li
							id={`filter-${keyword}`}
							className='filter__list-item'
							key={keyword}
							onClick={selectKeywordHandler}
						>
							{keyword}
						</li>
					))}
				{filteredKeywords.length > 0 &&
					filteredKeywords.map((keyword) => (
						<li
							id={`filter-${keyword}`}
							className='filter__list-item'
							key={keyword}
							onClick={selectKeywordHandler}
						>
							{keyword}
						</li>
					))}
				{filteredKeywords.length === 0 && inputValue !== '' && (
					<p>No results found</p>
				)}
			</ul>
		</Wrapper>
	);
};

export default FilterSection;
