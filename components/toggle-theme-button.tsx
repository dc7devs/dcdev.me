'use client';
import { useTheme } from "next-themes";
import Icons from "@/components/ui/icons";

import { Button } from "@/components/ui/button";

export default function ToggleThemeBtn() {
    const {theme, setTheme} = useTheme();

    function isDark() { return theme == "dark"}
    
    return (
        <Button
            className="ml-3 sm:m-0 align-middle bg-zinc-900/5 hover:bg-zinc-900/20 dark:bg-zinc-200/5 hover:dark:bg-zinc-200/20 backdrop-blur-sm border-zinc-700 dark:border-zinc-300"
            variant={'outline'} size={'icon'}
            onClick={() => {
                setTheme(isDark() ? "light" : "dark")
            }}
        >
            {isDark()
                ? <Icons.MoonStars className="w-[20px] h-[20px] md:w-[23px] md:h-[23px]" />
                : <Icons.SunDim className="w-[20px] h-[20px] md:w-[23px] md:h-[23px]" />
            }
        </Button>
    )
}