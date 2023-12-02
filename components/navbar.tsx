import Link from "next/link";
import ToggleThemeBtn from "./toggle-theme-button";
import { cn } from "@/lib/utils";

import Icons from "./ui/icons";
import { Separator } from "@/components/ui/separator"

export default function NavBar({ didScroll }: { didScroll: boolean }) {

    return (
        <div className={cn(
            "flex justify-center items-center",
        )}>
            <ul className={cn(
                "flex justify-stretch sm:items-center gap-x-3.5 sm:gap-x-5",
                "rounded-full sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl px-3 py-1 ring-1 ring-transparent",
                didScroll && "bg-zinc-900/5 dark:bg-zinc-200/5 backdrop-blur-sm ring-zinc-700 dark:ring-zinc-300"
            )}>
                {nav_items.map(({ name, icon, path }, index) => (
                    <li
                        key={index}
                        className={cn(
                            "font-medium min-w-max flex justify-center ",
                        )}
                    >
                        <Link className={"flex flex-col items-center align-bottom"} href={path}>
                            {icon}
                            <div className="hidden sm:block text-xs">{name}</div>
                        </Link>
                    </li>
                ))}
            </ul>

            <Separator orientation="vertical" className="hidden sm:block h-5 w-0.5 mx-4 bg-separator/90 dark:bg-white/80" />
            
            <ToggleThemeBtn />
        </div>
    )
}

const nav_items = [
    {
        name: "Inicio",
        icon: <Icons.HomeFill height={19} width={19} />,
        path: "/"
    },
    {
        name: "Projetos",
        icon: <Icons.BoxMultipleSearchFill height={19} width={19} />,
        path: "/projetos"
    },
    {
        name: "Artigos",
        icon: <Icons.NoteStackFill height={19} width={19} />,
        path: "/artigos"
    },
    {
        name: "Estudando Agora",
        icon: <Icons.BooksFill height={19} width={19} />,
        path: "/estudando-agora"
    },
    {
        name: "Contato",
        icon: <Icons.ChatFill height={19} width={19} />,
        path: "/contato"
    }
]