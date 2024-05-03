import Link from 'next/link';
import ToggleThemeBtn from './btn-toggle-theme';
import { cn } from '@/lib/utils';

import Icons from './ui/icons';
import { Separator } from '@/components/ui/separator';

export default function NavBar({ didScroll }: { didScroll: boolean }) {
  return (
    <div className={'flex items-center justify-center'}>
      <ul
        className={cn(
          'mr-2 flex justify-stretch space-x-4 sm:m-0 sm:items-center sm:space-x-5',
          'rounded-2xl border border-transparent px-2.5 py-2 sm:rounded-sm sm:py-1 md:rounded-md',
          didScroll &&
            'border-border bg-background/60 shadow-sm backdrop-blur-sm'
        )}
      >
        {nav_items.map(({ name, icon, path }, index: number) => (
          <li
            key={index}
            className={cn('flex min-w-max justify-center font-medium ')}
          >
            <Link
              className={
                'flex flex-col items-center align-bottom text-foreground/60 hover:text-foreground/80'
              }
              href={path}
              aria-label={name}
            >
              {icon}
              <div className="hidden text-xs sm:block">{name}</div>
            </Link>
          </li>
        ))}
      </ul>

      <Separator
        orientation="vertical"
        className={cn('mx-3 hidden h-5 w-0.5 sm:block')}
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
