import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateInterface } from '../../models/interfaces';
import { useDispatch } from 'react-redux';
import { deleteAll, deleteKeyword } from '../../store/actions/keyword-actions';
import Wrapper from '../reusable/Wrapper';
import FilterTile from '../reusable/FilterTile';

import './FilterList.scss';

const FilterList = () => {
	const keywordsList = useSelector((state: StateInterface) => state.keywords);

	const dispatch = useDispatch();

	const deleteFilterHandler = (id: string) => {
		dispatch(deleteKeyword(id));
	};

	const clearFilters = () => {
		dispatch(deleteAll());
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
