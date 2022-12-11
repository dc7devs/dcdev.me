import Link from "next/link";
import { useRouter } from "next/router";
import { CirclesFour, CirclesThreePlus, X } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import ToggleThemeBtn from "./toggle-dark-theme-btn";

type useEffectProps = {
    isOpenedModal: boolean
    setIsOpenedModal: Dispatch<SetStateAction<boolean>>
}

export default function NavBar({ isOpenedModal, setIsOpenedModal }: useEffectProps) {
    const router = useRouter();
    const [effect, setEffect] = useState(false);

    function changeCurrentStateModal() {
        setIsOpenedModal(!isOpenedModal);
    }

    return (
        <nav className="flex justify-center items-center">
            <ul className="hidden sm:flex justify-stretch items-cente gap-x-3">
                <li className={`${router.pathname == "/" &&  "light:text-zinc-900/90 dark:fill-zinc-400/90 font-medium" } font-normal sm:min-w-max sm:w-16 sm:flex sm:justify-center hover:text-violet-900/80 hover:transition hover:duration-75 hover:ease-in-out md:text-lg md:w-20 select-none`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`${router.pathname == "/about" &&  "light:text-zinc-900/90 dark:fill-zinc-400/90 font-medium"} font-normal sm:min-w-max sm:w-16 sm:flex sm:justify-center hover:text-violet-900/80 hover:transition hover:duration-75 hover:ease-in-out md:text-lg md:w-20 select-none`}>
                    <Link href="/about">About</Link>
                </li>
                <li className={`${router.pathname == "/projects" &&  "light:text-zinc-900/90 dark:fill-zinc-400/90 font-medium"} font-normal sm:min-w-max sm:w-16 sm:flex sm:justify-center hover:text-violet-900/80 hover:transition hover:duration-75 hover:ease-in-out md:text-lg md:w-20 select-none`}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className={`${router.pathname == "/contact" &&  "light:text-zinc-900/90 dark:fill-zinc-400/90 font-medium"} font-normal sm:min-w-max sm:w-16 sm:flex sm:justify-center hover:text-violet-900/80 hover:transition hover:duration-75 hover:ease-in-out md:text-lg md:w-20 select-none`}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            <hr className="hidden sm:block w-0.5 h-5 bg-separator/80 dark:bg-white/25 mx-5 md:mx-7 shadow-md rounded-full" />

            <button
                className={`relative z-50 text-2xl hover:text-violet-900/80 dark:hover:text-violet-300/70 ${effect && "animate-effect"} mr-3`}
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
        </nav>
    )
}