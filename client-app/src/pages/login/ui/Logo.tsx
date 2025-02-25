'use client';

import clsx from 'clsx';

import { Themes } from '@shared/model/const';

export const Logo = () => {
  const theme =
    document.body.getAttribute('data-theme') === Themes.Dark
      ? 'bg-[position:0px_-51px]'
      : 'bg-[position:0px_0px]';

  return (
    <div
      className={clsx(
        'h-[51px] w-[175px] bg-(image:--loginLogo) bg-no-repeat',
        theme
      )}></div>
  );
};
