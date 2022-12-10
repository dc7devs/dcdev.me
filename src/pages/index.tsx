import Link from 'next/link'

import Layout from '../components/layout'

export default function Home() {
  return (
      <Layout>
        <div className="w-full h-full flex items-center">
          <div className="flex flex-col gap-3">
            <h2 className="flex flex-col text-zinc">
              <div className="text-4xl font-semibold ">
                Hi!, my name is
              </div>
              <div className="text-7xl pl-5 font-extralight">
                DIEGO SILVA
              </div>
            </h2>
            <p 
              className="text-xl pl-5"
            >I'm a software <strong>
              <Link href="https://www.google.com/search?q=what+is+developer" className="underline" target="__blank">
                developer
              </Link>
            </strong>!</p>
            <button className="max-w-max h-8 px-2 text-xl font-regular rounded-lg text-black bg-black/25 ml-5 shadow-lg shadow-violet-700/25 bakcdrop-blur transition ring-1 ring-violet-700/50">
              <Link href="/about">
                more...
              </Link>
            </button>
          </div>
        </div>
      </Layout>
  )
}