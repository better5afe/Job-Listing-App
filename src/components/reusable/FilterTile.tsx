import { FilterTileProps } from '../../models/interfaces';
import KeywordTile from './KeywordTile';

import './FilterTile.scss';

const FilterTile: React.FC<FilterTileProps> = ({
	text,
	id,
	onDeleteKeyword,
}) => {
	return (
		<div className='filter-keywords'>
			<KeywordTile className='filter-keywords__text' keyword={text}></KeywordTile>
			<button className='filter-keywords__btn' onClick={onDeleteKeyword}>
				<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
					<path
						fill='#FFF'
						fill-rule='evenodd'
						d='M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z'
					/>
				</svg>
			</button>
		</div>
	);
};

export default FilterTile;
