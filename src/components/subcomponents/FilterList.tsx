import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateInterface } from '../../models/interfaces';
import Wrapper from '../reusable/Wrapper';
import FilterTile from '../reusable/FilterTile';

import './FilterList.scss';

const FilterList = () => {
	const keywordsList = useSelector((state: StateInterface) => state.keywords);

	const deleteFilterHandler = () => {
		console.log('delete filter');
	};

	const clearFilters = () => {
		console.log('clear filters');
	};

	return (
		<Wrapper className='keywords-box'>
			<ul className='keywords-box__list'>
				{keywordsList.map((keyword) => (
					<FilterTile
						id={keyword}
						key={keyword}
						text={keyword}
						onDeleteKeyword={deleteFilterHandler}
					/>
				))}
			</ul>
			<button className='keywords-box__btn' onClick={clearFilters}>
				Clear filters
			</button>
		</Wrapper>
	);
};

export default FilterList;
