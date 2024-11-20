import { ChildrenProps } from '@/interfaces/children';
import { cn } from '@/lib/utils';

const Card = ({ children, className }: ChildrenProps) => {
  return (
    <div
      className={cn(
        'w-[425px] h-[355px] rounded-3xl border border-2 bg-white p-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
