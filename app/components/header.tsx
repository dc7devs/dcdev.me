'use client';
import Link from "next/link";
import Image from "next/image";

import NavBar from "./navbar";

export default function Header() {
    return(
        <header className={"h-auto w-full pt-4 flex justify-between items-center px-8 md:px-0 md:justify-around sticky md:h-16"}>
            <Link href="/">
                <div className={"w-10 h-10 md:w-12 md:h-12 rounded-full ring-4 ring-violet-700/5 shadow-sm shadow-violet-700/10 bakcdrop-blur relative select-none"}>
                    <Image
                        className={"object-cover rounded-full"}
                        src="/images/My.png"
                        alt="Diego Image"
                        fill
                    />
                </div>
            </Link>

            <NavBar />
        </header>
    )
}