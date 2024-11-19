import { ChildrenProps } from '@/interfaces/children';
import { cn } from '@/lib/utils';

const Card = ({ children, className }: ChildrenProps) => {
  return (
    <div
      className={cn(
        'w-full max-w-lg rounded-lg border bg-white p-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
