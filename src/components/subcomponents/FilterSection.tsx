import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addKeyword } from '../../store/actions/keyword-actions';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateInterface } from '../../models/interfaces';
import Wrapper from '../reusable/Wrapper';

import './FilterSection.scss';

const FilterSection = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [isInputInFocus, setIsInputInFocus] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [filteredKeywords, setFilteredKeywords] = useState<string[]>([]);
	const [isError, setIsError] = useState({
		error: false,
		errorMessage: '',
	});

	const dispatch = useDispatch();

	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const backendJobs = useSelector((state: StateInterface) => state.list);

	const roles = backendJobs.map((job) => job.role);
	const levels = backendJobs.map((job) => job.level);
	const languages = backendJobs.flatMap((job) => job.languages);
	const tools = backendJobs.flatMap((job) => job.tools || []);

	const allKeywords = [...roles, ...levels, ...languages, ...tools].filter(
		Boolean
	) as string[];

	const uniqueKeywords = allKeywords.filter((item, index, self) => {
		return item !== '' && self.indexOf(item) === index;
	});

	const toggleFilterHandler = () => {
		setIsFilterOpen(!isFilterOpen);
		setIsInputInFocus(false);
	};

	const filterKeywordsHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setInputValue(event.target.value);

		const filteredList = uniqueKeywords.filter((keyword) =>
			keyword.toLowerCase().includes(event.target.value.toLowerCase())
		);

		setFilteredKeywords(filteredList);
	};

	const selectWithEnter = (event: React.KeyboardEvent<HTMLElement>) => {
		if (event.key !== 'Enter') {
			return;
		}

		console.log(filteredKeywords);

		if (event.target instanceof HTMLInputElement) {
			const inputValue = event.target.value;
			const lowercaseInputValue = inputValue.toLowerCase();

			if (inputValue.trim().length === 0) {
				setIsError({
					error: true,
					errorMessage: 'No value provided',
				});
			}

			let matchingKeyword = uniqueKeywords.find(
				(keyword) => keyword.toLowerCase() === lowercaseInputValue
			);

			if (!matchingKeyword) {
				setIsError({
					error: true,
					errorMessage: 'No matching value found',
				});
				return;
			}

			dispatch(addKeyword(matchingKeyword));
			setInputValue('');
			setIsError({
				error: false,
				errorMessage: '',
			});
			setFilteredKeywords([]);
		}

		if (event.target instanceof HTMLLIElement) {
			dispatch(addKeyword(event.currentTarget.textContent as string));
			setInputValue('');
			setIsError({
				error: false,
				errorMessage: '',
			});
			setFilteredKeywords([]);
		}
	};

	const selectKeywordHandler = (event: React.MouseEvent<HTMLElement>) => {
		const keyword = event.currentTarget.textContent as string;
		dispatch(addKeyword(keyword));
		setInputValue('');
		setIsError({
			error: false,
			errorMessage: '',
		});
	};

	useEffect(() => {
		const blurHandler = (event: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setIsInputInFocus(false);
				setIsFilterOpen(false);
				setInputValue('');
			}
		};

		window.addEventListener('click', blurHandler);
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
				onFocus={() => setIsInputInFocus(true)}
				onBlur={() => setIsFilterOpen(true)}
				onChange={filterKeywordsHandler}
				onKeyDown={selectWithEnter}
				value={inputValue}
			/>
			<p
				className={
					isError ? 'filter__error filter__error--visible' : 'filter__error'
				}
			>
				{isError.errorMessage}
			</p>
			<ul
				id='filter-list'
				className={
					isInputInFocus ? 'filter__list filter__list--active' : 'filter__list'
				}
			>
				{inputValue === '' &&
					uniqueKeywords.map((keyword, index, self) => (
						<li
							id={`filter-${keyword}`}
							className='filter__list-item'
							key={keyword}
							onClick={selectKeywordHandler}
							onKeyDown={selectWithEnter}
							onBlur={() => {
								if (index === self.length - 1) {
									setIsInputInFocus(false);
								}
							}}
							tabIndex={0}
						>
							{keyword}
						</li>
					))}
				{filteredKeywords.length > 0 &&
					filteredKeywords.map((keyword, index, self) => (
						<li
							id={`filter-${keyword}`}
							className='filter__list-item'
							key={keyword}
							onClick={selectKeywordHandler}
							onKeyDown={selectWithEnter}
							onBlur={() => {
								if (index === self.length - 1) {
									setIsInputInFocus(false);
								}
							}}
							tabIndex={0}
						>
							{keyword}
						</li>
					))}
				{filteredKeywords.length === 0 && inputValue !== '' && (
					<p className='filter__list-error'>No results found</p>
				)}
			</ul>
		</Wrapper>
	);
};

export default FilterSection;
