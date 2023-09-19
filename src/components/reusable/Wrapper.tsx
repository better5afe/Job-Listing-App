import { WrapperProps } from '../../models/interfaces'

import './Wrapper.scss'

const Wrapper: React.FC<WrapperProps> = ({children}) => {
    return <div className='wrapper'>{children}</div>
}

export default Wrapper