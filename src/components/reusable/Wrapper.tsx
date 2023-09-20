import { WrapperProps } from '../../models/interfaces'

import './Wrapper.scss'

const Wrapper: React.FC<WrapperProps> = ({children, className}) => {
    return <div className={`wrapper wrapper--${className}`}>{children}</div>
}

export default Wrapper