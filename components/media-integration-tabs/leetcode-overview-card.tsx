'use client';
import { Card } from '@/components/ui/card';
import Unavailable from '@/components/unavailable';

export const LeetCodeOverviewCard = () => {
  return (
    <Card className="flex flex-col h-full border-none mt-0 sm:ml-9 rounded-none">
      <Unavailable className={'z-10 rounded-none'} />
    </Card>
  );
};
