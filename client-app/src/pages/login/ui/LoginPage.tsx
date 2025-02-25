import { LocatedPropType } from '@shared/model/types/locale.type';
import LocaleComponent from '@shared/ui/LocaleComponent';

import { Login } from './Login';
import Preview from './Preview';

const LoginPage = ({ params }: LocatedPropType) => {
  return (
    <LocaleComponent params={params}>
      <div className='bg-surfaceContainer flex justify-center'>
        <Preview />
        <Login />
      </div>
    </LocaleComponent>
  );
};

export default LoginPage;
