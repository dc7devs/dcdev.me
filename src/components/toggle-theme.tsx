import { useTheme } from "next-themes";
import { MoonStars, SunDim } from "phosphor-react";
import { useEffect, useState } from "react";

export default function ToggleThemeBtn() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null; 

    function isDark() {
        return theme == "dark";
    }
    
    return (
        <button
            className="text-2xl hover:text-violet-900/80 dark:hover:text-violet-300/70"
            onClick={() => setTheme(isDark() ? "light" : "dark")}
        >
            {isDark() ? <MoonStars size={25} /> : <SunDim size={26} />}
        </button>
    )
}