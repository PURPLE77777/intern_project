'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { FormInput } from '@shared/ui/FormInput';

export const SignIn = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const onSubmit = () => {
    setIsLogIn(!isLogIn);
  };

  return (
    <div className='flex-col'>
      <FormInput placeholder='Phone number, username or email' />
      <FormInput placeholder='Password' />

      <div className={clsx(isLogIn ? 'bg-primary' : 'bg-primary/70')}>
        <button onClick={onSubmit}>Log in</button>
      </div>
    </div>
  );
};
