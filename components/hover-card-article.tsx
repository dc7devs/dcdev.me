import { ReactElement } from 'react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';

interface HoverCardArticleProps {
  children: ReactElement;
}

export default function HoverCardArticle({ children }: HoverCardArticleProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{children}</Button>
      </HoverCardTrigger>

      <HoverCardContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </HoverCardContent>
    </HoverCard>
  );
}
