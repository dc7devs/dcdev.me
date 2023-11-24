import Link from "next/link";
import { usePathname } from "next/navigation";
import ToggleThemeBtn from "./toggle-theme-button";
import cx from "clsx";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center items-center">
            <ul className="hidden sm:flex sm:justify-stretch sm:items-cente sm:gap-x-3">
                {nav_items.map(({ name, icon, path }, index) => (
                    <li
                        key={index}
                        className={cx(pathname == path &&  "text-zinc-900/90 dark:fill-zinc-400/90 font-semibold", "font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center hover:text-violet-900/80 hover:transition hover:duration-75 hover:ease-in-out md:text-base md:w-20 select-none")}
                    >
                        <Link href={path}>{name}</Link>
                    </li>
                ))}
            </ul>

            {/* <hr className="hidden sm:block w-0.5 h-5 bg-separator/80 dark:bg-white/25 mx-5 md:mx-7 shadow-md rounded-full" /> */}
            <ToggleThemeBtn />
        </nav>
    )
}

const nav_items = [
    {
        name: "Inicio",
        icon: <></>,
        path: "/"
    }
]