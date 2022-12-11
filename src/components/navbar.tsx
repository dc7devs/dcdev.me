import Link from "next/link";
import { useRouter } from "next/router";
import { CirclesFour, CirclesThreePlus, X } from "phosphor-react";
import { useState } from "react";
import Modal from "./modal";
import ToggleThemeBtn from "./toggle-dark-theme-btn";

export default function NavBar() {
    const router = useRouter();
    const [isOpenedModal, setIsOpenedModal] = useState(false);
    const [effect, setEffect] = useState(false);

    function changeCurrentStateModal() {
        setIsOpenedModal(!isOpenedModal);
    }

    return(
        <nav className="h-auto w-full pt-4 text-base flex justify-between items-center px-8 md:px-0 md:justify-around md:h-16 absolute top-0">
            <Link href="/">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-4 ring-violet-700/5 shadow-sm shadow-violet-700/10 bakcdrop-blur relative select-none">
                    <img className="object-cove rounded-full" src="/images/My.png" alt="Althor image" />
                </div>
            </Link>

            <div className="flex justify-center items-center">
                <ul className="hidden sm:flex justify-stretch items-cente gap-x-3">
                    <li className={`${router.pathname == "/" ?  "text-zinc-900/90 font-semibold" : "text-base" } font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-violet-900/80 sm:hover:medium hover:transition duration-75 ease-in-out md:text-lg md:w-20 `}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`${router.pathname == "/about" ?  "text-zinc-900/90 font-semibold" : "text-base"} font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-violet-900/80 sm:hover:medium hover:transition duration-75 ease-in-out md:text-lg md:w-20`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`${router.pathname == "/projects" ?  "text-zinc-900/90 font-semibold" : "text-base"} font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-violet-900/80 sm:hover:medium hover:transition duration-75 ease-in-out md:text-lg md:w-20`}>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className={`${router.pathname == "/contact" ?  "text-zinc-900/90 font-semibold" : "text-base"} font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-violet-900/80 sm:hover:medium hover:transition duration-75 ease-in-out md:text-lg md:w-20`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                <hr className="hidden sm:block w-0.5 h-5 bg-separator/80 dark:bg-white/25 mx-5 md:mx-7 shadow-md rounded-full" />

                <button
                    className={`relative z-50 text-2xl hover:text-violet-900/80 dark:hover:text-violet-300/70 transition ${effect && "animate-effect"} duration-75 ease-in-out mr-3`}
                    onClick={() => {
                        setEffect(true);
                        changeCurrentStateModal();
                    }}
                    onAnimationEnd={() => setEffect(false)}
                >
                    {
                        effect ? <CirclesFour size={25} /> : (isOpenedModal ? <X size={25} /> : <CirclesThreePlus size={25} />)
                    }
                </button>

                <ToggleThemeBtn />
            </div>

            {isOpenedModal && <Modal />}
        </nav>
    )
}