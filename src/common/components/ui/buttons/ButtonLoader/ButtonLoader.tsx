import { useState } from 'react';

import { TWO_SEC } from '~/constants/.';
import { GearIcon } from '~/icons/.';

import style from './ButtonLoader.module.scss';

const ButtonLoader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), TWO_SEC);
  };

  return (
    <button
      onClick={handleClick}
      className={`${style.button} ${isLoading ? style.loading : ''}`}
      type="button"
    >
      <GearIcon />
      <span>{isLoading ? 'Deploying' : 'Deploy Site'}</span>
    </button>
  );
};

export default ButtonLoader;
