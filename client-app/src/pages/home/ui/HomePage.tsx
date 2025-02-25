import { LocatedPropType } from '@shared/model/types/locale.type';
import LocaleComponent from '@shared/ui/LocaleComponent';

import { Home } from './Home';

const HomePage = ({ params }: LocatedPropType) => {
  return (
    <LocaleComponent params={params}>
      <Home />
    </LocaleComponent>
  );
};

export default HomePage;
