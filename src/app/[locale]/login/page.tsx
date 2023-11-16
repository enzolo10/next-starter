import { useTranslations } from 'next-intl';
import LangToggle from '@/components/LangToggle';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const t = useTranslations('Index');

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-80 flex-col items-center gap-6 p-6">
        <p className="text-[22px]">Next Starter</p>
        <LangToggle />
        <div>
          <p>{t('title')}</p>
          <p>{t('subtitle')}</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
