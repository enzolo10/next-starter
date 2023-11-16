'use client';

import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
// import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { loginValidator, type LoginPayload as FormData } from '@/lib/validators/login';

const LoginForm = () => {
  // const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const { isLoading, mutateAsync: loginMutation } = api.auth.login.useMutation();

  const form = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
    },
    // mode: 'onChange',
    resolver: zodResolver(loginValidator),
  });

  const onSubmit = async ({ username, password }: FormData) => {
    setErrorMessage('');
    try {
      setIsLoading(true);
      // const result = await signIn('credentials', {
      //   username,
      //   password,
      //   redirect: false,
      // });

      console.log(username, password);

      // if (result?.error) {
      //   setErrorMessage('Log in failed. Incorrect username or password.');
      //   return;
      // }
      // router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e?.message || 'Internal server error');
        return;
      }
      setErrorMessage('Internal server error');
    } finally {
      setIsLoading(false);
    }

    // usePlatformStore.setState({ token: res.data.token });
  };

  return (
    <Form {...form}>
      <form className="flex w-full select-none flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-start gap-2.5 space-y-0">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className={cn({ 'focus-visible:ring-destructive': !!form.formState.errors.username })}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-start gap-2.5 space-y-0">
              <FormLabel>Passoword</FormLabel>
              <FormControl>
                <Input
                  type="current-password"
                  className={cn({ 'focus-visible:ring-destructive': !!form.formState.errors.password })}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-destructive text-center text-sm">{errorMessage}</p>
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={!form.formState.isValid || isLoading}
          className="h-12 text-base"
        >
          Login
          <span className="sr-only">Log in</span>
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
