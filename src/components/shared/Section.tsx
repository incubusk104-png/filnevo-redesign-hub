import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
  py?: string; // padding y-axis
  containerClassName?: string;
}

export default function Section({
  children,
  className = '',
  py = 'py-20',
  containerClassName = '',
}: SectionProps) {
  return (
    <section className={`${py} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 {containerClassName}">
        {children}
      </div>
    </section>
  );
}