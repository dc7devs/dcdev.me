import Link from "next/link";
import { useRouter } from "next/router";
import { SquaresFour, X } from "phosphor-react";
import { useState } from "react";
import Modal from "./modal";
import ToggleThemeBtn from "./toggle-theme";

export default function NavBar() {
    const router = useRouter();
    const [isOpenedModal, setIsOpenedModal] = useState(false);

    function changeCurrentStateModal() {
        setIsOpenedModal(!isOpenedModal);
    }

    return(
        <nav className="h-auto w-full pt-4 text-base text-zinc-800/70 dark:text-white/70 flex justify-between items-center px-8 md:px-0 md:justify-around md:h-16 absolute top-0">
            <Link href="/">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-violet-700/5 shadow-md shadow-violet-700/10 bakcdrop-blur relative">
                    <img className="object-cove rounded-full" src="/images/My.png" alt="Althor image" />
                </div>
            </Link>

            <div className="flex justify-center items-center">
                <ul className="hidden sm:flex justify-stretch items-cente gap-x-3">
                    <li className={`${router.pathname == "/" ?  "text-zinc-800/90 dark:text-white/90 font-semibold" : "text-base" } font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-violet-900/80 dark:sm:hover:text-violet-300/70 sm:hover:medium transition duration-75 ease-in-out md:text-lg md:w-20 `}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`${router.pathname == "/about" ?  "text-z300-700/90 dark:text-white/90 font-semibold" : "text-base"} font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-violet-900/80 dark:sm:hover:text-violet-300/70 sm:hover:medium transition duration-75 ease-in-out md:text-lg md:w-20`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`${router.pathname == "/contact" ?  "text-z300-700/90 dark:text-white/90 font-semibold" : "text-base"} font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-violet-900/80 dark:sm:hover:text-violet-300/70 sm:hover:medium transition duration-75 ease-in-out md:text-lg md:w-20`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className={`${router.pathname == "/projects" ?  "text-z300-700/90 dark:text-white/90 font-semibold" : "text-base"} font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-violet-900/80 dark:sm:hover:text-violet-300/70 sm:hover:medium transition duration-75 ease-in-out md:text-lg md:w-20`}>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>

                <hr className="hidden sm:block w-0.5 h-5 bg-separator/80 dark:bg-white/25 mx-5 md:mx-7 shadow-md rounded-full" />

                <button
                    onClick={() => changeCurrentStateModal()}
                    className="relative z-50 text-2xl hover:text-violet-900/80 dark:hover:text-violet-300/70 transition duration-75 ease-in-out mr-3"
                >
                    {isOpenedModal ? <X size={32} /> : <SquaresFour />}
                </button>

                <ToggleThemeBtn />
            </div>

            {isOpenedModal && <Modal />}
        </nav>
    )
}