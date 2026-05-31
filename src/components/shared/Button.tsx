import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  asChild?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  asChild = false,
}: ButtonProps) {
  const BaseButton = asChild ? 'span' : 'button';

  const baseClasses = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variantClasses = {
    primary: 'bg-sapphire text-ink hover:bg-sapphire/80',
    secondary: 'bg-sapphire/20 text-sapphire hover:bg-sapphire/30',
    outline: 'border border-sapphire/30 text-sapphire hover:bg-sapphire/5',
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-[11px]',
    md: 'h-9 px-4 text-[11px]',
    lg: 'h-10 px-5 text-[12px]',
  };

  return (
    <BaseButton
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
}