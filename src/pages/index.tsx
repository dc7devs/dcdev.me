import Link from 'next/link'

import Layout from '../components/layout'
import ToggleThemeBtn from '../components/toggle-theme'

export default function Home() {
  return (
      <Layout>
        <div className="sm:w-full sm:h-full flex mt-24 sm:m-0 sm:items-center">
          <div className="flex flex-col gap-10 md:gap-5 px-4">
            <h2 className="flex flex-col text-zinc">
              <div className="text-4xl font-semibold ">
                Hi!, my name is
              </div>
              <div className="text-5xl md:text-7xl md:ml-5 font-extralight">
                DIEGO SILVA
              </div>
            </h2>
            <p 
              className="text-xl md:ml-5"
            >I'm a software <strong>
              <Link href="https://www.google.com/search?q=what+is+developer" className="underline" target="__blank">
                developer
              </Link>
            </strong>!</p>
            <button className="max-w-max h-8 px-2 text-xl font-regular rounded-lg text-black dark:text-white bg-black/25 dark:bg-white/25 md:ml-5 dark:border-1 shadow-md dark:shadow-none shadow-violet-700/25 dark:shadow-violet-300/25 bakcdrop-blur transition ring-2 ring-violet-700/30 dark:ring-violet-300/10">
              <Link href="/about">
                more...
              </Link>
            </button>
          </div>
        </div>
      </Layout>
  )
}