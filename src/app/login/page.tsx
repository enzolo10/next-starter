import LoginForm from './LoginForm';

const LoginPage = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="flex w-80 flex-col items-center gap-6 p-6">
      <p className="text-[22px]">Next Starter</p>
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
