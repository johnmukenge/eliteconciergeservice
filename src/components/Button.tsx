'use client';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  [key: string]: any;
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 inline-block';
  
  const variants = {
    primary: 'px-8 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:shadow-lg',
    secondary: 'px-8 py-3 border-2 border-gold-500 text-gold-600 hover:bg-gold-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
