import { KeywordTileProps } from "../../models/interfaces"

import './KeywordTile.scss'

const KeywordTile: React.FC<KeywordTileProps> = ({keyword}) => {
    return <p className="keyword-tile">{keyword}</p>
}

export default KeywordTile