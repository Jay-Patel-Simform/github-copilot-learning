import { cn } from '~/lib/utils';

interface ContainerProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'container',
        'w-full mx-auto px-4 py-2',
        'sm:px-8 sm:py-4',
        'xl:max-w-[1192px]',
        className,
      )}
    >
      {children}
    </div>
  );
}
