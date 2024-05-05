'use client';
import { Card } from '@/components/ui/card';
import Unavailable from '@/components/unavailable';

export const LeetCodeOverviewCard = () => {
  return (
    <Card className="flex h-56 flex-col rounded-none border-none bg-accent">
      <Unavailable className={'z-10 rounded-none'} />
    </Card>
  );
};
