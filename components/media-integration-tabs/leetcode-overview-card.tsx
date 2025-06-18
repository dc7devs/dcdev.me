'use client';
import { Card } from '@/components/ui/card';
import Unavailable from '@/components/unavailable';

export const LeetCodeOverviewCard = () => {
  return (
    <Card className="bg-accent flex h-56 flex-col rounded-none border-none">
      <Unavailable className={'z-10 rounded-none'} />
    </Card>
  );
};
