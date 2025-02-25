import { useTranslations } from 'next-intl';

export const Home = () => {
  const t = useTranslations('HomePage');
  return <p>{t('title')}</p>;
};
