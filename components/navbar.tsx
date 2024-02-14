import Link from 'next/link';
import ToggleThemeBtn from './btn-toggle-theme';
import { cn } from '@/lib/utils';

import Icons from './ui/icons';
import { Separator } from '@/components/ui/separator';

export default function NavBar({ didScroll }: { didScroll: boolean }) {
  return (
    <div className={'flex justify-center items-center'}>
      <ul
        className={cn(
          'flex justify-stretch sm:items-center space-x-4 sm:space-x-5 mr-2 sm:m-0',
          'rounded-2xl sm:rounded-sm md:rounded-md px-2.5 py-2 sm:py-1 border border-transparent',
          didScroll &&
            'bg-background/60 backdrop-blur-sm border-border shadow-sm'
        )}
      >
        {nav_items.map(({ name, icon, path }, index: number) => (
          <li
            key={index}
            className={cn('font-medium min-w-max flex justify-center ')}
          >
            <Link
              className={
                'flex flex-col items-center align-bottom text-foreground/60 hover:text-foreground/80'
              }
              href={path}
            >
              {icon}
              <div className="hidden sm:block text-xs">{name}</div>
            </Link>
          </li>
        ))}
      </ul>

      <Separator
        orientation="vertical"
        className={cn('hidden sm:block h-5 w-0.5', didScroll ? 'mx-2' : 'mx-3')}
      />

      <ToggleThemeBtn />
    </div>
  );
}

const nav_items = [
  {
    name: 'Home',
    icon: <Icons.HomeFill className="size-5 sm:size-5" />,
    path: '/'
  },
  {
    name: 'Projects',
    icon: <Icons.BoxMultipleSearchFill className="size-5 sm:size-5" />,
    path: '/projects'
  },
  // {
  //   name: 'Articles',
  //   icon: <Icons.NoteStackFill className='size-5 sm:size-5' />,
  //   path: '/articles'
  // },
  {
    name: 'Studying...',
    icon: <Icons.BooksFill className="size-5 sm:size-5" />,
    path: '/studying'
  },
  {
    name: 'Contact',
    icon: <Icons.ChatFill className="size-5 sm:size-5" />,
    path: '/contact'
  }
];
