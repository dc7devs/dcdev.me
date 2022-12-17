import Link from "next/link";
import { useRouter } from "next/router";
import { CirclesFour, CirclesThreePlus, X } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import cx from "clsx";
import ToggleThemeBtn from "./toggle-dark-theme-btn";

type useEffectProps = {
    isOpenedModal: boolean
    setIsOpenedModal: Dispatch<SetStateAction<boolean>>
}

export default function NavBar({
    isOpenedModal,
    setIsOpenedModal
}: useEffectProps) {
    const router = useRouter();
    const [effect, setEffect] = useState(false);

    function changeCurrentStateModal() {
        setIsOpenedModal(!isOpenedModal);
    }

    return (
        <nav className="flex justify-center items-center">
            <ul className="hidden sm:flex sm:justify-stretch sm:items-cente sm:gap-x-3">
                <li className={cx(router.pathname == "/" &&  "text-zinc-900/90 dark:fill-zinc-400/90 font-semibold", "font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center hover:text-violet-900/80 hover:transition hover:duration-75 hover:ease-in-out md:text-base md:w-20 select-none")}>
                    <Link href="/">Home</Link>
                </li>
                <li className={cx(router.pathname == "/about" &&  "text-zinc-900/90 dark:fill-zinc-400/90 font-semibold", "font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center hover:text-violet-900/80 hover:transition hover:duration-75 hover:ease-in-out md:text-base md:w-20 select-none")}>
                    <Link href="/about">About</Link>
                </li>
                <li className={cx(router.pathname == "/projects" &&  "text-zinc-900/90 dark:fill-zinc-400/90 font-semibold", "font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center hover:text-violet-900/80 hover:transition hover:duration-75 hover:ease-in-out md:text-base md:w-20 select-none")}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className={cx(router.pathname == "/contact" &&  "text-zinc-900/90 dark:fill-zinc-400/90 font-semibold", "font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center hover:text-violet-900/80 hover:transition hover:duration-75 hover:ease-in-out md:text-base md:w-20 select-none")}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            <hr className="hidden sm:block w-0.5 h-5 bg-separator/80 dark:bg-white/25 mx-5 md:mx-7 shadow-md rounded-full" />

            <button
                className={cx("relative z-50 text-2xl hover:text-violet-900/80 dark:hover:text-violet-300/70", effect && "animate-effect", "mr-3")}
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