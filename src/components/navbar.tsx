import Link from 'next/link'

import { SquaresFour } from 'phosphor-react'

export default function NavBar() {
    return (
        <nav className="h-12 w-full text-base text-black-70 flex justify-between items-center px-8 border-b border-dashed border-black-50">
            <div className="text-xl">
                <Link href="/">
                    DS-DEVS
                </Link>
            </div>

            <div className="text-3xl flex justify-center items-center">
                <button>
                    <SquaresFour />
                </button>
            </div>
        </nav>
    )
}