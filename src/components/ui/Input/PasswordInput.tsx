'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input, type InputProps } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className="relative flex-1">
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        autoComplete="one-time-code"
        className={cn('pr-[30px]', className)}
        ref={ref}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        className="absolute inset-y-0 right-2 z-10 h-full cursor-pointer p-0 hover:bg-transparent"
        onClick={() => setIsPasswordVisible((prev) => !prev)}
        // disabled={props.value === '' || props.disabled}
      >
        {isPasswordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
        <span className="sr-only">{isPasswordVisible ? 'Hide password' : 'Show password'}</span>
      </Button>
    </div>
  );
});
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
