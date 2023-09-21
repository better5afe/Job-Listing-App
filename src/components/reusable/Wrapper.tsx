import React, { forwardRef } from 'react';
import { WrapperProps } from '../../models/interfaces';

import './Wrapper.scss';

const Wrapper: React.ForwardRefRenderFunction<HTMLDivElement, WrapperProps>
    = ({ children, className }, ref) => {
  return (
    <div className={`wrapper wrapper--${className}`} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef(Wrapper);

