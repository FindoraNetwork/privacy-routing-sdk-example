import React, { HTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import UnknownSvg from '_assets/images/unknown.svg';

import './index.less';

export interface IAppImage extends HTMLAttributes<HTMLDivElement> {
  imageUri?: string;
}

const AppImage: React.FC<IAppImage> = ({ imageUri, ...props }) => {
  const { className = '', ...restProps } = props;
  const [isError, setIsError] = useState<boolean>(false);
  
  const onError = () => setIsError(true);
  function renderIcon() {
    if (isError || !imageUri) {
      return <UnknownSvg />
    }
    return <img src={imageUri} onError={onError} />
  }
  return (
    <div className={classNames('app-image', className)} {...restProps}>
      {renderIcon()}
    </div>
  )
};

export default AppImage;
