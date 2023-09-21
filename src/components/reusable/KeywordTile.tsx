import { KeywordTileProps } from "../../models/interfaces"

import './KeywordTile.scss'

const KeywordTile: React.FC<KeywordTileProps> = ({keyword, className}) => {
    return <p className={`keyword-tile keyword-tile--${className}`}>{keyword}</p>
}

export default KeywordTile