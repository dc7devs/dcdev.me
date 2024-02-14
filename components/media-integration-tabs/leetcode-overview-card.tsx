'use client';
import { Card } from '@/components/ui/card';
import Unavailable from '@/components/unavailable';

export const LeetCodeOverviewCard = () => {
  return (
    <Card className="flex flex-col h-56 border-none rounded-none">
      <Unavailable className={'z-10 rounded-none ring-1 ring-input'} />
    </Card>
  );
};
