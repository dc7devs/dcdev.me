'use client';
import { Card } from '@/components/ui/card';
import Unavailable from '@/components/unavailable';

export const LeetCodeOverviewCard = () => {
  return (
    <Card className="flex flex-col h-56 border-none rounded-none bg-accent">
      <Unavailable className={'z-10 rounded-none'} />
    </Card>
  );
};
