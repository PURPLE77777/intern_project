import { Logo } from './Logo';
import { SignIn } from './SignIn';

export const Login = () => {
  return (
    <div className='border-outline w-[350px] flex-col border-[1px]'>
      <p className='text-primary'>Login page</p>

      <Logo />

      <SignIn />
      <div></div>
      <div></div>
    </div>
  );
};
