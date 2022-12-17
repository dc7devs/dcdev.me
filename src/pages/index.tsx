import Link from 'next/link'

import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="sm:w-full sm:h-full flex mt-24 sm:m-0 sm:items-center select-none">
        <div className="flex flex-col gap-10 md:gap-5 px-4">
          <h2 className="flex flex-col text-zinc md:gap-[3px]">
            <div className="text-4xl font-semibold">
              Hi! my name is
            </div>
            <div className="text-5xl md:text-7xl md:ml-5 font-extralight">
              DIEGO SILVA
            </div>
          </h2>
          <p 
            className="text-xl md:ml-5"
          >I'm a software <strong>
            <Link
              href="https://www.google.com/search?q=what+is+developer"
              className="underline dark:hover:text-white/70 hover:text-zinc-700 hover:transition-colors hover:ease-in"
              target="__blank"
            >
              developer
            </Link>
          </strong>!</p>
          <button className="max-w-max h-8 px-2 text-xl hover:text-zinc-700 dark:hover:text-white/70 font-regular rounded-lg bg-black/25 dark:bg-white/25 md:ml-5 dark:border-1 md:shadow-sm hover:shadow-violet-500/25 bakcdrop-blur ring-4 dark:ring-2 ring-violet-300/10 border border-transparent hover:transition-colors hover:ease-in hover:border-zinc-700 dark:hover:border-white/50">
            <Link href="/about">
              about me...
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  )
}