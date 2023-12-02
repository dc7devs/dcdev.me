'use client';
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import NavBar from "./navbar";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
    const [didScroll, setDidiScroll] = useState(true);

    const onScroll = useCallback(() => {
        const { scrollY } = window;

        if (scrollY > 25) {
            setDidiScroll(true);
        } else {
            setDidiScroll(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return(
        <header className={cn("h-auto w-full pt-4 flex md:px-0", didScroll && "sticky top-0")}>
            <div className={"w-full sm:w-2/3 sm:gap-5 m-auto flex justify-between items-center px-5 py-2 sm:p-2"}>
                <Link href="/">
                    <div className={"w-9 h-9 rounded-full ring-4 ring-violet-700/5 shadow-sm shadow-violet-700/10 bakcdrop-blur relative select-none"}>
                        <Image
                            className={"object-cover rounded-full"}
                            src="/images/My.png"
                            alt="Diego Image"
                            fill
                            sizes=""
                        />
                    </div>
                </Link>

                <NavBar didScroll={didScroll} />
            </div>
        </header>
    )
}